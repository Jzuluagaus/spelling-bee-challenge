(() => {
  const BOOKING_URL = "https://wa.me/524771547387?text=Hola%20Smile%20Alegr%C3%ADa%2C%20quiero%20agendar%20una%20cita%20de%20valoraci%C3%B3n.";
  const ROUND_SIZE = 5;
  const AVATARS = {
    wow: {src:"yazmin-wow.png", heading:"WOW! You crushed it!", alt:"Yazmin celebrating — wow you crushed it"},
    good: {src:"yazmin-good-job.png", heading:"Good Job!", alt:"Yazmin giving a thumbs up — good job"},
    retry: {src:"yazmin-are-you-kidding.png", heading:"Are you kidding me? 😜", alt:"Yazmin teasing — are you kidding me, try again"}
  };

  const $ = (id) => document.getElementById(id);
  const answerButtons = [0,1,2,3].map(i => $("a"+i));
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  let activeUnit = null;
  let gameMode = null; // choose | spell | hear
  let words = [];
  let queue = [];
  let current = null;
  let attempts = 0;
  let score = 0;
  let streak = 0;
  let bestStreak = 0;
  let correct = 0;
  let mistakes = 0;
  let value = 100;
  let locked = false;
  let phase = "main"; // main | review
  let missedWords = [];
  let mainCorrect = 0;
  let lockedSpellingPct = null;
  let recognition = null;
  let recognizing = false;

  function shuffle(arr){
    for(let i=arr.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    return arr;
  }

  function cancelSpeech(){
    if("speechSynthesis" in window) window.speechSynthesis.cancel();
  }

  function speakText(text, rate){
    return new Promise((resolve) => {
      if(!("speechSynthesis" in window)){ resolve(); return; }
      cancelSpeech();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US";
      u.rate = rate == null ? 0.78 : rate;
      u.onend = () => resolve();
      u.onerror = () => resolve();
      window.speechSynthesis.speak(u);
    });
  }

  function pause(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function lettersOf(word){
    return String(word).split("");
  }

  function formatHeard(lettersJoined){
    const chars = String(lettersJoined).toUpperCase().split("");
    return chars.length ? chars.join("-") : "—";
  }

  function normalizeSpelling(raw){
    return String(raw || "")
      .toLowerCase()
      .replace(/[^a-z0-9áéíóúüñ]/gi, "");
  }

  function normalizeAnswer(word){
    return normalizeSpelling(word);
  }

  function showView(view){
    $("menu").classList.toggle("hide", view !== "menu");
    $("modeSelect").classList.toggle("hide", view !== "mode");
    $("game").classList.toggle("hide", view !== "game");
    if(view === "finish") $("finish").classList.add("show");
    else $("finish").classList.remove("show");
  }

  function buildMenu(){
    const grid = $("unitGrid");
    grid.innerHTML = "";
    for(let n=1;n<=9;n++){
      const key = "unit" + n;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "unit-btn";
      btn.dataset.unit = key;
      const playable = isUnitPlayable(key);
      btn.disabled = !playable;
      btn.textContent = playable ? ("Unit " + n) : "";
      if(!playable) btn.innerHTML = "Unit " + n + '<span class="soon">Coming soon</span>';
      btn.addEventListener("click", () => selectUnit(key));
      grid.appendChild(btn);
    }
    const mixed = $("mixedBtn");
    const mixedOk = isUnitPlayable("mixed");
    mixed.disabled = !mixedOk;
    mixed.innerHTML = mixedOk
      ? "🎯 Mixed Challenge"
      : '🎯 Mixed Challenge<span class="soon">Coming soon</span>';
  }

  function selectRoundWords(){
    if(words.length < ROUND_SIZE){
      throw new Error("Selected unit needs at least " + ROUND_SIZE + " words");
    }
    return shuffle(words.map((_,i)=>i)).slice(0, ROUND_SIZE);
  }

  function spellingPercent(){
    if(lockedSpellingPct !== null) return lockedSpellingPct;
    return Math.round((mainCorrect / ROUND_SIZE) * 100);
  }

  function showResults(){
    if(phase === "main" && lockedSpellingPct === null){
      lockedSpellingPct = Math.round((mainCorrect / ROUND_SIZE) * 100);
    }
    const pct = spellingPercent();
    let tier = AVATARS.retry;
    if(pct >= 90) tier = AVATARS.wow;
    else if(pct >= 75) tier = AVATARS.good;

    $("finishHeading").textContent = tier.heading;
    const img = $("yazminAvatar");
    img.src = tier.src;
    img.alt = tier.alt;
    $("spellingScore").textContent = pct + "%";
    $("finalScore").textContent = "⭐ " + score + " points";
    $("finalStats").textContent = "🔥 Best streak: " + bestStreak;
    const practiceBtn = $("practiceMistakes");
    if(gameMode !== "hear" && missedWords.length > 0) practiceBtn.classList.add("show");
    else practiceBtn.classList.remove("show");
    $("changeUnit").classList.add("show");
    stopRecognition();
    cancelSpeech();
    showView("finish");
  }

  function selectUnit(unitKey){
    if(!isUnitPlayable(unitKey)) return;
    activeUnit = unitKey;
    words = getUnitWordList(unitKey);
    if(words.length < ROUND_SIZE) return;
    gameMode = null;
    showView("mode");
  }

  function startMode(mode){
    gameMode = mode;
    resetGame();
  }

  function applyModeChrome(){
    $("choosePanel").classList.toggle("hide", gameMode !== "choose");
    $("spellPanel").classList.toggle("hide", gameMode !== "spell");
    $("hearPanel").classList.toggle("hide", gameMode !== "hear");
    $("statusWrap").classList.toggle("hide-points", gameMode === "hear");
    $("hear").style.display = gameMode === "choose" ? "" : "none";
    if(gameMode === "choose"){
      $("promptTitle").textContent = "Which spelling is correct?";
      $("feedback").textContent = "👀 Look carefully. One is correct.";
    } else if(gameMode === "spell"){
      $("promptTitle").textContent = "Spell the word";
      $("feedback").textContent = "🔊 Hear the word, then spell the letters.";
    } else {
      $("promptTitle").textContent = "Hear the spelling";
      $("feedback").textContent = "Listen and learn. Tap Next Word when ready.";
    }
  }

  function resetGame(){
    if(!activeUnit || !gameMode || words.length < ROUND_SIZE){
      goToMenu();
      return;
    }
    phase = "main";
    queue = selectRoundWords();
    current = null;
    attempts = score = streak = bestStreak = correct = mistakes = mainCorrect = 0;
    value = 100;
    locked = false;
    missedWords = [];
    lockedSpellingPct = null;
    $("practiceMistakes").classList.remove("show");
    $("spellFallback").classList.remove("show");
    $("spellInput").value = "";
    $("heardBox").textContent = "I heard: —";
    $("nextWordBtn").classList.remove("show");
    applyModeChrome();
    showView("game");
    nextWord();
  }

  function goToMenu(){
    stopRecognition();
    cancelSpeech();
    activeUnit = null;
    gameMode = null;
    words = [];
    phase = "main";
    lockedSpellingPct = null;
    missedWords = [];
    $("practiceMistakes").classList.remove("show");
    $("changeUnit").classList.remove("show");
    buildMenu();
    showView("menu");
  }

  function startPractice(){
    if(missedWords.length === 0 || gameMode === "hear") return;
    phase = "review";
    queue = shuffle(missedWords.slice());
    current = null;
    attempts = 0;
    locked = false;
    applyModeChrome();
    showView("game");
    nextWord();
  }

  function renderLetterBoard(word, activeIndex){
    const board = $("letterBoard");
    board.innerHTML = "";
    lettersOf(word).forEach((ch, idx) => {
      const el = document.createElement("span");
      el.className = "ch" + (ch === " " ? " space" : "") + (idx === activeIndex ? " on" : "");
      el.textContent = ch === " " ? "—" : ch.toUpperCase();
      board.appendChild(el);
    });
  }

  function nextWord(){
    stopRecognition();
    cancelSpeech();
    if(queue.length===0){
      showResults();
      return;
    }

    current = queue.shift();
    attempts += 1;
    value = 100;
    locked = false;

    const item = words[current];

    if(phase === "main"){
      $("progress").textContent = `Word ${attempts} · ${queue.length} remaining`;
    } else {
      $("progress").textContent = `Practice · ${queue.length} remaining`;
    }

    $("clue").className = "clue";
    $("clue").textContent = "";
    $("heardBox").textContent = "I heard: —";
    $("spellInput").value = "";
    $("micBtn").classList.remove("listening");
    $("micBtn").textContent = "🎤 Tap and spell the word";
    $("nextWordBtn").classList.remove("show");

    if(gameMode === "choose"){
      const options = shuffle([item.word, ...item.wrong.slice()]);
      answerButtons.forEach((btn,i)=>{
        btn.disabled = false;
        btn.className = "answer";
        btn.textContent = options[i];
      });
      $("feedback").textContent = "👀 Look carefully. One is correct.";
    } else if(gameMode === "spell"){
      $("feedback").textContent = "🔊 Hear the word, then spell the letters.";
      if(!SpeechRecognition){
        $("spellFallback").classList.add("show");
        $("feedback").textContent = "🎤 Voice spelling isn’t available here. Type the spelling instead.";
      }
    } else {
      renderLetterBoard(item.word, -1);
      $("feedback").textContent = "Listen and learn. Tap Next Word when ready.";
      $("nextWordBtn").classList.add("show");
    }

    updateMeta();
  }

  function updateMeta(){
    $("score").textContent = score;
    $("streak").textContent = streak;
    $("stats").textContent = `✓ ${correct} correct · ✕ ${mistakes} mistakes`;
    $("worth").textContent = `Worth ⭐ ${value} pts`;
  }

  function showClue(text){
    const clue = $("clue");
    clue.textContent = text;
    clue.className = "clue show";
  }

  function useHelp(kind){
    if(locked) return;
    if(gameMode !== "hear") value = Math.max(50, value - 25);
    const item = words[current];
    if(kind==="definition") showClue("💡 " + item.definition);
    if(kind==="sentence") showClue("💬 " + item.sentence);
    updateMeta();
  }

  function hearCurrentWord(penalize){
    if(locked && gameMode === "choose") return;
    if(penalize && gameMode === "choose"){
      value = Math.max(50, value - 25);
      updateMeta();
    }
    const word = words[current].word;
    speakText(word, 0.78);
  }

  async function hearSpellingLetters(){
    if(locked) return;
    const word = words[current].word;
    const chars = lettersOf(word);
    cancelSpeech();
    for(let i=0;i<chars.length;i++){
      renderLetterBoard(word, i);
      const ch = chars[i];
      if(ch === " "){
        await pause(350);
        continue;
      }
      await speakText(ch.toUpperCase(), 0.7);
      await pause(220);
    }
    renderLetterBoard(word, -1);
    await pause(250);
    await speakText(word, 0.78);
    $("nextWordBtn").classList.add("show");
  }

  function markResult(isCorrect, answerDisplay){
    if(isCorrect){
      correct += 1;
      streak += 1;
      if(streak > bestStreak) bestStreak = streak;
      score += value;
      if(phase === "main") mainCorrect += 1;
      $("feedback").textContent = `⭐ Correct! +${value} points`;
    } else {
      mistakes += 1;
      streak = 0;
      if(phase === "main"){
        if(!missedWords.includes(current)) missedWords.push(current);
        $("feedback").textContent = `Almost! The correct spelling is ${answerDisplay}`;
      } else {
        queue.push(current);
        $("feedback").textContent = `Almost! The correct spelling is ${answerDisplay}. You will see it again.`;
      }
    }
    updateMeta();
  }

  function choose(btn){
    if(locked || gameMode !== "choose") return;
    locked = true;
    const answer = words[current].word;
    const chosen = btn.textContent;

    if(chosen===answer){
      btn.classList.add("correct");
      btn.textContent = "✓ " + answer;
      markResult(true, answer);
    } else {
      btn.classList.add("wrong");
      btn.textContent = "✕ " + chosen;
      markResult(false, answer);
      answerButtons.forEach(b=>{
        if(b.textContent===answer){
          b.classList.add("correct");
          b.textContent = "✓ " + answer;
        }
      });
    }

    answerButtons.forEach(b=>b.disabled=true);
    window.setTimeout(nextWord, 1400);
  }

  function gradeSpelled(raw){
    if(locked || gameMode !== "spell") return;
    locked = true;
    stopRecognition();
    const answer = words[current].word;
    const heardNorm = normalizeSpelling(raw);
    const answerNorm = normalizeAnswer(answer);
    const display = formatHeard(heardNorm || normalizeSpelling(raw.replace(/\s+/g,"")));
    $("heardBox").textContent = "I heard: " + display;

    const ok = heardNorm.length > 0 && heardNorm === answerNorm;
    if(ok){
      $("feedback").textContent = "⭐ Correct!";
      markResult(true, formatHeard(answerNorm));
    } else {
      markResult(false, formatHeard(answerNorm));
      // markResult already set Almost text with answerDisplay
      $("feedback").textContent = "Almost! The correct spelling is " + formatHeard(answerNorm);
    }
    window.setTimeout(nextWord, 1600);
  }

  function stopRecognition(){
    recognizing = false;
    $("micBtn").classList.remove("listening");
    $("micBtn").textContent = "🎤 Tap and spell the word";
    try{ if(recognition) recognition.stop(); }catch(e){}
  }

  function startRecognition(){
    if(locked || gameMode !== "spell") return;
    if(!SpeechRecognition){
      $("spellFallback").classList.add("show");
      $("feedback").textContent = "🎤 Voice spelling isn’t available here. Type the spelling instead.";
      return;
    }
    if(recognizing){
      stopRecognition();
      return;
    }
    recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.maxAlternatives = 3;
    recognition.continuous = false;

    recognizing = true;
    $("micBtn").classList.add("listening");
    $("micBtn").textContent = "🎤 Listening… tap to stop";
    $("feedback").textContent = "Spell the letters out loud.";

    recognition.onresult = (event) => {
      let transcript = "";
      for(let i=0;i<event.results.length;i++){
        transcript += event.results[i][0].transcript + " ";
      }
      transcript = transcript.trim();
      const interim = formatHeard(normalizeSpelling(transcript));
      $("heardBox").textContent = "I heard: " + interim;
      if(event.results[event.results.length-1].isFinal){
        gradeSpelled(transcript);
      }
    };
    recognition.onerror = (event) => {
      stopRecognition();
      if(event.error === "not-allowed" || event.error === "service-not-allowed"){
        $("spellFallback").classList.add("show");
        $("feedback").textContent = "Microphone permission is off. You can type the spelling instead.";
      } else {
        $("spellFallback").classList.add("show");
        $("feedback").textContent = "Couldn’t hear clearly. Try again or type the spelling.";
      }
    };
    recognition.onend = () => {
      recognizing = false;
      $("micBtn").classList.remove("listening");
      $("micBtn").textContent = "🎤 Tap and spell the word";
    };

    try{
      recognition.start();
    }catch(e){
      stopRecognition();
      $("spellFallback").classList.add("show");
      $("feedback").textContent = "Microphone isn’t ready. Type the spelling instead.";
    }
  }

  function advanceLearn(){
    if(gameMode !== "hear" || locked) return;
    locked = true;
    if(phase === "main") mainCorrect += 1;
    correct += 1;
    updateMeta();
    window.setTimeout(nextWord, 350);
  }

  answerButtons.forEach(btn=>btn.addEventListener("click",()=>choose(btn)));
  $("define").addEventListener("click",()=>useHelp("definition"));
  $("sentence").addEventListener("click",()=>useHelp("sentence"));
  $("hear").addEventListener("click",()=>hearCurrentWord(true));
  $("spellHearWord").addEventListener("click",()=>hearCurrentWord(false));
  $("learnHearWord").addEventListener("click",()=>hearCurrentWord(false));
  $("learnHearSpelling").addEventListener("click",()=>hearSpellingLetters());
  $("micBtn").addEventListener("click", startRecognition);
  $("spellSubmit").addEventListener("click", ()=>gradeSpelled($("spellInput").value));
  $("spellInput").addEventListener("keydown", (e)=>{
    if(e.key === "Enter") gradeSpelled($("spellInput").value);
  });
  $("nextWordBtn").addEventListener("click", advanceLearn);
  $("restart").addEventListener("click", resetGame);
  $("practiceMistakes").addEventListener("click", startPractice);
  $("changeUnit").addEventListener("click", goToMenu);
  $("backToUnits").addEventListener("click", goToMenu);
  $("mixedBtn").addEventListener("click",()=>selectUnit("mixed"));
  document.querySelectorAll(".mode-card").forEach((btn)=>{
    btn.addEventListener("click", ()=>startMode(btn.dataset.mode));
  });

  $("bookingLink").href = BOOKING_URL;

  if("serviceWorker" in navigator){
    window.addEventListener("load",()=>{
      navigator.serviceWorker.register("sw.js").catch(()=>{});
    });
  }

  buildMenu();
  showView("menu");
})();
