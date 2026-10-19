let currentWordIndex = 0,
  currentQuestionIndex = 0,
  currentDialogueIndex = 0,
  currentGameIndex = 0,
  score = 0,
  gameScore = 0,
  gameLevel = 1,
  selectedAnswer = null,
  selectedGameOption = null;
function initParticles() {
  const container = document.getElementById('particles');
  const colors = ['#FF6B9D', '#C44DFF', '#00F5FF', '#FFB347'];
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    const size = Math.random() * 10 + 5;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    particle.style.boxShadow =
      '0 0 ' + size * 2 + 'px ' + particle.style.backgroundColor;
    particle.style.animationDelay = Math.random() * 5 + 's';
    particle.style.animationDuration = Math.random() * 10 + 15 + 's';
    container.appendChild(particle);
  }
}
function showPage(pageName) {
  document
    .querySelectorAll('.page')
    .forEach((p) => p.classList.remove('active'));
  document.getElementById('page-' + pageName).classList.add('active');
  if (pageName === 'vocabulary') loadWord();
  else if (pageName === 'exam' && selectedAnswer === null) loadQuestion();
  else if (pageName === 'speaking') loadDialogue();
  else if (pageName === 'game' && selectedGameOption === null) loadGame();
}
function loadWord() {
  const word = words[currentWordIndex % words.length];
  document.getElementById('word-word').textContent = word.word;
  document.getElementById('word-phonetic').textContent = word.phonetic;
  document.getElementById('word-meaning').textContent = word.meaning;
  document.getElementById('word-example').textContent = word.example;
  document.getElementById('word-mnemonic').textContent = word.mnemonic;
  document.getElementById('word-image').src = word.image;
  document.getElementById('vocab-progress').textContent =
    currentWordIndex + 1 + ' / ' + words.length;
  document.getElementById('word-badges').innerHTML =
    '<span class="difficulty-badge difficulty-' +
    word.difficulty +
    '">' +
    word.difficulty.toUpperCase() +
    '</span><span class="category-badge">' +
    getCategoryLabel(word.category) +
    '</span>';
  document.getElementById('wordCard').classList.remove('flipped');
}
function flipCard() {
  document.getElementById('wordCard').classList.add('flipped');
}
function nextWord() {
  currentWordIndex = (currentWordIndex + 1) % words.length;
  loadWord();
}
function loadQuestion() {
  const q = questions[currentQuestionIndex % questions.length];
  document.getElementById('question-text').textContent = q.question;
  document.getElementById('exam-progress').textContent =
    currentQuestionIndex + 1 + ' / ' + questions.length;
  document.getElementById('exam-score').textContent = score + ' 分';
  document.getElementById('question-badges').innerHTML =
    '<span class="badge badge-blue" style="margin-bottom:16px;">' +
    q.type.toUpperCase() +
    '</span><span class="category-badge" style="margin-left:8px;margin-bottom:16px;">' +
    getCategoryLabel(q.category) +
    '</span>';
  document.getElementById('question-options').innerHTML = q.options
    .map(
      (opt, i) =>
        '<div class="option" data-index="' +
        i +
        '" onclick="selectAnswer(' +
        i +
        ')"><span class="option-letter">' +
        String.fromCharCode(65 + i) +
        '</span><span>' +
        opt +
        '</span></div>',
    )
    .join('');
  document.getElementById('question-explanation').style.display = 'none';
  document.getElementById('next-question-btn').style.display = 'none';
  selectedAnswer = null;
}
function selectAnswer(index) {
  if (selectedAnswer !== null) return;
  selectedAnswer = index;
  const q = questions[currentQuestionIndex % questions.length];
  const options = document.querySelectorAll('#question-options .option');
  options.forEach((opt, i) => {
    opt.classList.add('disabled');
    if (i === q.answer) opt.classList.add('correct');
    else if (i === index && index !== q.answer) opt.classList.add('incorrect');
  });
  if (index === q.answer) {
    score += 10;
    document.getElementById('exam-score').textContent = score + ' 分';
  }
  document.getElementById('question-explanation').innerHTML =
    '<p style="color:' +
    (index === q.answer ? '#10B981' : '#F59E0B') +
    ';">' +
    (index === q.answer ? '🎉 太棒了！答对了！' : '💪 没关系，继续加油！') +
    '</p><p style="margin-top:8px;color:#D1D5DB;">' +
    q.explanation +
    '</p>';
  document.getElementById('question-explanation').style.display = 'block';
  document.getElementById('next-question-btn').style.display = 'block';
}
function nextQuestion() {
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  if (currentQuestionIndex === 0) score = 0;
  loadQuestion();
}
function loadDialogue() {
  const dialogue = dialogues[currentDialogueIndex];
  document.getElementById('dialogue-scene').textContent = dialogue.scene;
  document.getElementById('dialogue-progress').textContent =
    currentDialogueIndex + 1 + ' / ' + dialogues.length;
  const container = document.getElementById('dialogue-lines');
  container.replaceChildren();
  dialogue.lines.forEach((line) => {
    const row = document.createElement('div');
    row.className = 'dialogue-line ' + (line.speaker === 'B' ? 'reverse' : '');
    const avatar = document.createElement('div');
    avatar.className = 'speaker-avatar speaker-' + line.speaker.toLowerCase();
    avatar.textContent = line.speaker;
    const bubble = document.createElement('div');
    bubble.className = 'dialogue-bubble';
    const text = document.createElement('div');
    text.className = 'dialogue-text';
    text.textContent = line.text;
    const translation = document.createElement('div');
    translation.className = 'dialogue-translation';
    translation.textContent = line.translation;
    bubble.append(text, translation);
    const button = document.createElement('button');
    button.className = 'speak-btn';
    button.textContent = '🔊';
    button.setAttribute('aria-label', '朗读：' + line.text);
    button.addEventListener('click', () => speak(line.text));
    row.append(avatar, bubble, button);
    container.appendChild(row);
  });
}
function nextDialogue() {
  currentDialogueIndex = (currentDialogueIndex + 1) % dialogues.length;
  loadDialogue();
}
function speak(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  }
}
function loadGame() {
  const word = words[currentGameIndex % words.length];
  document.getElementById('game-word').textContent = word.word;
  document.getElementById('game-phonetic').textContent = word.phonetic;
  document.getElementById('game-level').textContent = gameLevel;
  document.getElementById('game-score').textContent = gameScore;
  const correct = word.meaning;
  const others = words
    .filter((w) => w.id !== word.id)
    .map((w) => w.meaning)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  const options = [correct, ...others].sort(() => Math.random() - 0.5);
  document.getElementById('game-options').innerHTML = options
    .map(
      (opt, i) =>
        '<div class="option" data-option="' +
        opt +
        '" onclick="selectGameOption(\'' +
        opt.replace(/'/g, "\\'") +
        '\')"><span>' +
        opt +
        '</span></div>',
    )
    .join('');
  document.getElementById('game-result').style.display = 'none';
  document.getElementById('game-progress').style.width =
    ((currentGameIndex % words.length) / words.length) * 100 + '%';
  selectedGameOption = null;
}
function selectGameOption(option) {
  if (selectedGameOption !== null) return;
  selectedGameOption = option;
  const word = words[currentGameIndex % words.length];
  const isCorrect = option === word.meaning;
  const options = document.querySelectorAll('#game-options .option');
  options.forEach((opt) => {
    opt.classList.add('disabled');
    if (opt.dataset.option === word.meaning) opt.classList.add('correct');
    else if (opt.dataset.option === option && !isCorrect)
      opt.classList.add('incorrect');
  });
  if (isCorrect) {
    gameScore += 10;
    if ((currentGameIndex + 1) % 3 === 0) gameLevel++;
  }
  const resultHTML = isCorrect
    ? '<div class="result-emoji">🎉</div><h3 class="result-title" style="color:#10B981;">太棒了！+10 分</h3><p style="color:#D1D5DB;">' +
      word.example +
      '</p>'
    : '<div class="result-emoji">💪</div><h3 class="result-title" style="color:#F59E0B;">加油！继续挑战</h3><p style="color:#D1D5DB;">正确答案是: <span style="color:var(--neon-pink);font-weight:600;">' +
      word.meaning +
      '</span></p>';
  document.getElementById('game-result').innerHTML =
    resultHTML +
    '<div class="result-buttons"><button class="btn btn-primary" onclick="nextGame()">下一题 →</button><button class="btn btn-secondary" onclick="restartGame()">重新开始</button></div>';
  document.getElementById('game-result').className =
    'result-card ' + (isCorrect ? 'correct' : 'incorrect');
  document.getElementById('game-result').style.display = 'block';
  document.getElementById('game-score').textContent = gameScore;
  document.getElementById('game-level').textContent = gameLevel;
}
function nextGame() {
  currentGameIndex++;
  loadGame();
}
function restartGame() {
  currentGameIndex = 0;
  gameLevel = 1;
  gameScore = 0;
  loadGame();
}
function getCategoryLabel(category) {
  const labels = {
    cet4: '四级',
    cet6: '六级',
    postgraduate: '考研',
    daily: '日常',
  };
  return labels[category] || category;
}
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
});
