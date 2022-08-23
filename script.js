"use strict";

const tasks = document.querySelector(".tasks");
// const item = document.querySelector(".item");
const pollList = document.querySelector(".poll-list");
const createPoll = document.querySelector(".add-list");
const pollRadios = document.querySelector(".poll-radios");
const body = document.querySelector(".body");
const enteredQuestion = document.querySelector(".entered-question");
const pollHeader = document.querySelector(".poll-header");
const answerInput = document.querySelectorAll(".answerinput");
// const optionText = document.querySelector(".option-text");
const addAnswer = document.querySelector(".fa-plus");
const pollOptions = document.querySelectorAll(".poll-options");

// delete item from list
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.parentElement.remove();
  }
});

addAnswer.addEventListener("click", () => {
  const addAnswerAgain = document.createElement("div");
  addAnswerAgain.classList.add("item");
  addAnswerAgain.innerHTML = `
  <input type="text" class="answerinput" placeholder="type your answer here" required />
  <div class="item-btn">
    <i class="fa-solid fa-trash"></i>
  </div>
  `;
  tasks.appendChild(addAnswerAgain);
  const a = document.querySelectorAll(".answerinput");
  console.log(a);
});

createPoll.addEventListener("click", () => {
  if (enteredQuestion.value === "") {
    alert("Type your question here");
  } else {
    updateInput();
  }
});

function updateInput() {
  pollHeader.innerHTML = enteredQuestion.value;

  const pollOptions = document.querySelector(".poll-options");
  // pollOptions.innerHTML = `
  //   <div class="option">
  //     // {/* <input type="radio" class="option-input" name="radio" required> */}
  //     <p class="option-text"></p>
  //   </div>
  // `;

  const a = document.querySelectorAll(".item");

  let values = [];

  a.forEach((element) => {
    values.push(element.firstChild.nextSibling.value);
    // const optionText = document.querySelector(".option-text");
    console.log(values);
    // optionText.innerHTML = values;
  });

  values.forEach(function (value) {
    const option = document.createElement("div");
    option.classList.add("option");
    const input = document.createElement("input");
    input.classList.add("option-input");
    input.type = "radio";
    input.name = "radio";
    const p = document.createElement("p");
    p.classList.add("option.text");
    option.appendChild(input);
    option.appendChild(p);
    p.innerHTML = value;
    pollOptions.appendChild(option);
  });
  setTimeout(() => {
    pollList.classList.add("hidden");
    pollRadios.classList.add("hidden");
    body.classList.add("pink");
  }, 300);
}
