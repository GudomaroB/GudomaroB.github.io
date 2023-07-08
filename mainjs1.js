"use strict";
const audio = new Audio("sc.mp3");
// ! от 1 до 9
const odin = document.querySelector(".ac4");
const dva = document.querySelector(".ac5");
const tri = document.querySelector(".ac6");
const che = document.querySelector(".ac7");
const pyat = document.querySelector(".ac8");
const shest = document.querySelector(".ac9");
const sem = document.querySelector(".ac10");
const vosem = document.querySelector(".ac11");
const devyat = document.querySelector(".ac12");
// ! операторы
const nol = document.querySelector(".nol");
const tochka = document.querySelector(".tochka");
const ac = document.querySelectorAll(".ac");
const rovno = document.querySelector(".rovno");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const umnojit = document.querySelector(".acx");
const razdelit = document.querySelector(".delenie");
const procent = document.querySelector(".ac2");
const clear = document.querySelector(".clear");
const mm = [plus, minus, umnojit, razdelit, rovno];
const spans = document.querySelectorAll("span");
const spanNumber = document.querySelector(".span44");
for (let accs of ac) {
  accs.addEventListener("click", function () {
    audio.play();
  });
}
clear.addEventListener("click", function () {
  spanNumber.value = "0";
});
