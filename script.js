"use strict";

const tasks = document.querySelector(".tasks");
const pollList = document.querySelector(".poll-list");
const createPoll = document.querySelector(".add-list");
const pollRadios = document.querySelector(".poll-radios");
const body = document.querySelector(".body");
const enteredQuestion = document.querySelector(".entered-question");
const pollHeader = document.querySelector(".poll-header");
const answerInput = document.querySelectorAll(".answerinput");
const answerInputOne = document.querySelector(".answerinputone");
const answerInputTwo = document.querySelector(".answerinputtwo");
const answerInputThree = document.querySelector(".answerinputthree");
const answerInputFour = document.querySelector(".answerinputfour");
const optionText = document.querySelectorAll(".option-text");
const optionTextOne = document.querySelector(".optiontextone");
const optionTextTwo = document.querySelector(".optiontexttwo");
const optionTextThree = document.querySelector(".optiontextthree");
const optionTextFour = document.querySelector(".optiontextfour");

// delete item from list
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-xmark")) {
    e.target.parentElement.parentElement.remove();
  }
});

//  mark item as completed
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-pen-to-square")) {
    e.target.parentElement.parentElement.classList.toggle("completed");
  }
});

createPoll.addEventListener("click", () => {
  if (enteredQuestion.value === "") {
    alert("Type your question here");
  } else if (
    answerInputOne.value === "" ||
    answerInputTwo.value === "" ||
    answerInputThree.value === "" ||
    answerInputFour.value === ""
    // (answerInput.values = "")
  ) {
    alert("Type your answer here completely");
  } else {
    pollHeader.innerHTML = enteredQuestion.value;
    optionTextOne.innerHTML = answerInputOne.value;
    optionTextTwo.innerHTML = answerInputTwo.value;
    optionTextThree.innerHTML = answerInputThree.value;
    optionTextFour.innerHTML = answerInputFour.value;
    updateInput();
  }
});

// realize inputs
function updateInput() {
  setTimeout(() => {
    pollList.classList.add("hidden");
    pollRadios.classList.add("hidden");
    body.classList.add("pink");
  }, 300);
}
