const answers = [
  "现在就开始。",
  "答案已经在你心里。",
  "别急，再等等。",
  "换个角度看。",
  "这件事值得尝试。",
  "先完成最小的一步。",
  "不要为了完美停在原地。",
  "今天适合做决定。",
  "把问题问得更清楚。",
  "相信第一次直觉。",
  "它会比你想象中顺利。",
  "先休息，再回来处理。",
  "大胆一点。",
  "暂时不要公开。",
  "你需要更多信息。",
  "这不是唯一的选择。",
  "从简单的版本开始。",
  "继续往前走。",
  "现在还不是时候。",
  "结果会慢慢显现。"
];

const answerElement = document.querySelector("#answer");
const askButton = document.querySelector("#askButton");

function showRandomAnswer() {
  const randomIndex = Math.floor(Math.random() * answers.length);
  answerElement.textContent = answers[randomIndex];

  answerElement.classList.remove("answer-pop");
  void answerElement.offsetWidth;
  answerElement.classList.add("answer-pop");
}

askButton.addEventListener("click", showRandomAnswer);
