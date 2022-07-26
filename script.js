"use strict";

const tasks = document.querySelector(".tasks");
const pollList = document.querySelector(".poll-list");
const createPoll = document.querySelector(".add-list");
const pollRadios = document.querySelector(".poll-radios");
const body = document.querySelector(".body");
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
  updateInput();
});

// realize inputs
function updateInput() {
  setTimeout(() => {
    pollList.classList.add("hidden");
    pollRadios.classList.add("hidden");
    body.classList.add("pink");
  }, 150);
}
