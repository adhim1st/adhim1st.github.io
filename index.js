window.addEventListener("load", init);

let score = 0;
let time = 30;
let cekBermain = true;
let count;
let stat;

let inputType = document.getElementById("input_type");
let wordDisplay = document.getElementById("word");
let timeDisplay = document.getElementById("time");
let scoreDisplay = document.getElementById("score");

const word = [
  "editor",
  "ajax",
  "algoritma",
  "javascript",
  "code",
  "pseudocode",
  "api",
  "html",
  "css",
  "bug",
  "database",
  "fullstack",
  "function",
  "looping",
  "object",
  "array",
  "github",
  "commit",
  "branch",
  "sql",
  "webserver",
  "script",
  "iterator",
  "variable",
];

function gameStart() {
  let button = document.getElementById("startgame");
  if (button.innerHTML == "Start Game") {
    button.innerHTML = "Stop Game";
    displayWord(word);
    inputType.addEventListener("input", mulaiRonde);
    count = setInterval(countDown, 1000);
    stat = setInterval(gameStatus, 50);
  } else {
    button.innerHTML = "Start Game";
    clearInterval(count, stat);
    time = 30;
    score = 0;
    init();
  }
}

function init() {
  timeDisplay.innerHTML = time;
}

function mulaiRonde() {
  if (cekKata()) {
    cekBermain = true;
    displayWord(word);
    inputType.value = "";
    score++;
  }
  scoreDisplay.innerHTML = score;
}

function cekKata() {
  if (inputType.value === wordDisplay.innerHTML) {
    return true;
  } else {
    return false;
  }
}

function displayWord(word) {
  const random = Math.floor(Math.random() * word.length);
  wordDisplay.innerHTML = word[random];
}

function countDown() {
  if (time > 0) {
    time--;
  } else if (time == 0) {
    cekBermain = false;
  }
  timeDisplay.innerHTML = time;
}

function gameStatus() {
  if (cekBermain == false && time === 0) {
    scoreDisplay.innerHTML = 0;
    clearInterval(count, stat);
    time = 30;
    alert(`Selamat!! Score kamu ${score}, pilih OK untuk memulai kembali`);
    window.location.reload();
  }
}
