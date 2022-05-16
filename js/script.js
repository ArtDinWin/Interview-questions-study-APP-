import { send } from "../js/data.js";

console.log("Start app =>");

const answers = document.getElementById("answers");
const buttonSubmit = document.getElementById("submit");
const buttonNext = document.getElementById("next");
const buttonUpload = document.getElementById("upload");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const tags = document.getElementById("tags");
const score = document.getElementById("score");
let answered = 1;
let tip = 0;
let tips = 0;
const questions = send.length;

buttonSubmit.addEventListener("click", function () {
  answers.classList.toggle("answers-none");

  buttonSubmit.innerHTML =
    buttonSubmit.innerHTML === "Показать ОТВЕТ"
      ? (buttonSubmit.innerHTML = "Скрыть ОТВЕТ")
      : (buttonSubmit.innerHTML = "Показать ОТВЕТ");
  if (tip == 0) {
    tips++;
  }
  score.innerHTML =
    "Вопрос: " + answered + "  из " + questions + " Подсказок: " + tips;
  tip = 1;
});

buttonUpload.addEventListener("click", function () {
  location.reload();
});

let ransArray = [];
let rand;

rand = Math.floor(Math.random() * (send.length - 1 + send.length - 1));
while (rand == send.length) {
  rand = Math.floor(Math.random() * (send.length - 1 + send.length - 1));
}

question.innerHTML = send[rand].question;
a_text.innerHTML = send[rand].answer;
tags.innerHTML = "#" + send[rand].tags;
if (tags.innerHTML == "#html") {
  console.log("HTML ");
  tags.style.backgroundColor = "#f1a2ba";
} else if (tags.innerHTML == "#css") {
  tags.style.backgroundColor = "#a2ccf1";
} else if (tags.innerHTML == "#js") {
  tags.style.backgroundColor = "#f1f0a2";
} else {
  tags.style.backgroundColor = "#a2f1bf";
}
score.innerHTML =
  "Вопрос: " + answered + "  из " + questions + " Подсказок: " + tips;
ransArray.push(rand);
//console.log("q ", q);

buttonNext.addEventListener("click", function () {
  if (ransArray.length == 0) {
    question.innerHTML = "Вопросы закончились! Обновите страницу!";
    a_text.innerHTML = "Обновите страницу!";
    tags.innerHTML = "#tags";
    question.style.opacity = "0.1";
    a_text.style.opacity = "0.1";
    tags.style.opacity = "0.1";
    buttonNext.style.opacity = "0.1";
    buttonSubmit.style.opacity = "0.1";
    setTimeout(function () {
      const result = confirm(
        "Вопросы закончились! Обновите страницу! \nВсего вопросов: " +
          answered +
          "  из " +
          questions +
          " Подсказок: " +
          tips
      );
      if (result) {
        location.reload();
      } else {
        question.innerHTML = "Вопросы закончились! Обновите страницу!";
        a_text.innerHTML = "Обновите страницу!";
        tags.innerHTML = "#tags";
      }
    }, 200);

    if (answered < send.length) {
      answered++;
    }
    score.innerHTML =
      "Вопрос: " + answered + "  из " + questions + " Подсказок: " + tips;
  } else {
    while (ransArray.includes(rand) || rand == send.length) {
      rand = Math.floor(Math.random() * (send.length - 1 + send.length - 1));
    }
    ransArray.push(rand);

    if (!answers.classList.contains("answers-none")) {
      answers.classList.add("answers-none");
    }

    question.innerHTML = send[rand].question;
    a_text.innerHTML = send[rand].answer;
    tags.innerHTML = "#" + send[rand].tags;

    buttonSubmit.innerHTML =
      buttonSubmit.innerHTML === "Скрыть ОТВЕТ"
        ? (buttonSubmit.innerHTML = "Показать ОТВЕТ")
        : (buttonSubmit.innerHTML = "Показать ОТВЕТ");
    answered++;
    score.innerHTML =
      "Вопрос: " + answered + "  из " + questions + " Подсказок: " + tips;
  }

  if (ransArray.length == send.length) {
    ransArray = [];
  }

  if (tags.innerHTML == "#html") {
    console.log("HTML ");
    tags.style.backgroundColor = "#f1a2ba";
  } else if (tags.innerHTML == "#css") {
    tags.style.backgroundColor = "#a2ccf1";
  } else if (tags.innerHTML == "#js") {
    tags.style.backgroundColor = "#f1f0a2";
  } else {
    tags.style.backgroundColor = "#a2f1bf";
  }

  if (tip == 1) {
    tip = 0;
  }
});

console.log("SEE => ", send[rand]["name/123"]);
