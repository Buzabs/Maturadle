const START_DATE = new Date("2026-11-25T00:00:00");
let dayOffset = 0;

function getDayNumber() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diffTime = today - START_DATE;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays) + dayOffset;
}

function getCurrentQuestion() {
  const dayNumber = getDayNumber();
  const index = dayNumber % QUESTIONS.length;
  return {
    dayNumber: dayNumber + 1,
    data: QUESTIONS[index]
  };
}

function getStats() {
  return JSON.parse(localStorage.getItem("maturadle_stats")) || {
    streak: 0,
    lastSolvedDay: null,
    history: {}
  };
}

function saveStats(stats) {
  localStorage.setItem("maturadle_stats", JSON.stringify(stats));
}

function updateStreakDisplay(streak) {
  const label = streak === 1 ? "1 dzień" : `${streak} dni`;
  document.getElementById("streak-count").textContent = label;
}

function renderMath() {
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ]
    });
  }
}

function startGame() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const { dayNumber, data } = getCurrentQuestion();
  const stats = getStats();
  const savedAnswer = stats.history[dayNumber] || null;

  document.getElementById("day-title").textContent = `Dzień #${dayNumber}`;
  document.getElementById("question-source").textContent = `${data.source} • ${data.topic}`;
  document.getElementById("question-text").innerHTML = data.question;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  const letters = ["A", "B", "C", "D"];

  data.options.forEach((optionText, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.innerHTML = `<span class="option-letter">${letters[index]}</span><span>${optionText}</span>`;

    if (savedAnswer !== null) {
      btn.disabled = true;
      if (index === data.correctIndex) {
        btn.classList.add("correct");
      }
      if (index === savedAnswer.selectedIndex && index !== data.correctIndex) {
        btn.classList.add("wrong");
      }
    } else {
      btn.addEventListener("click", () => handleAnswer(index, dayNumber, data));
    }

    optionsContainer.appendChild(btn);
  });

  const explanationBox = document.getElementById("explanation-box");

  if (savedAnswer !== null) {
    explanationBox.innerHTML = `<strong>Wyjaśnienie:</strong><br>${data.explanation}`;
    explanationBox.classList.remove("hidden");
  } else {
    explanationBox.classList.add("hidden");
  }

  renderMath();
}

function handleAnswer(selectedIndex, dayNumber, questionData) {
  const isCorrect = selectedIndex === questionData.correctIndex;
  const stats = getStats();

  if (isCorrect) {
    if (stats.lastSolvedDay === dayNumber - 1) {
      stats.streak += 1;
    } else {
      stats.streak = 1;
    }
  } else {
    stats.streak = 0;
  }

  stats.lastSolvedDay = dayNumber;
  stats.history[dayNumber] = { selectedIndex, isCorrect };

  saveStats(stats);
  updateStreakDisplay(stats.streak);
  renderQuestion();
}


window.addEventListener("DOMContentLoaded", () => {
  const stats = getStats();
  updateStreakDisplay(stats.streak);

  document.getElementById("start-btn").addEventListener("click", startGame);
  document.getElementById("demo-next-btn").addEventListener("click", () => {
    dayOffset += 1;
    renderQuestion();
  });
});