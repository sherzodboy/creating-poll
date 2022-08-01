"use strict";

const tasks = document.querySelector(".tasks");
const item = document.querySelector(".item");
const pollList = document.querySelector(".poll-list");
const createPoll = document.querySelector(".add-list");
const pollRadios = document.querySelector(".poll-radios");
const body = document.querySelector(".body");
const enteredQuestion = document.querySelector(".entered-question");
const pollHeader = document.querySelector(".poll-header");
const answerInput = document.querySelectorAll(".answerinput");
const optionText = document.querySelectorAll(".option-text");
const addAnswer = document.querySelector(".fa-plus");

// delete item from list
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.parentElement.remove();
  }
});

tasks.innerHTML = ` 
  <div class="item">
    <input type="text" class="answerinput" placeholder="type your answer here" required>
    <div class="item-btn">
      <i class="fa-solid fa-trash"></i>
    </div>
  </div>

  <div class="item">
    <input type="text" class="answerinput" placeholder="type your answer here" required>
    <div class="item-btn">
      <i class="fa-solid fa-trash"></i>
    </div>
  </div>
`;

addAnswer.addEventListener("click", () => {
  const addAnswerAgain = document.createElement("div");
  addAnswerAgain.classList.add("item");
  addAnswerAgain.innerHTML = `
  <input type="text" class="answerinput" placeholder="type your answer here" required>
  <div class="item-btn">
    <i class="fa-solid fa-trash"></i>
  </div>
  `;
  tasks.appendChild(addAnswerAgain);
});

createPoll.addEventListener("click", () => {
  if (enteredQuestion.value === "") {
    alert("Type your question here");
  } else if (answerInput.values === "") {
    alert("Type your answer here completely");
  } else {
    updateInput();
  }
});

function updateInput() {
  pollHeader.innerHTML = enteredQuestion.value;
  setTimeout(() => {
    pollList.classList.add("hidden");
    pollRadios.classList.add("hidden");
    body.classList.add("pink");
  }, 300);
}
