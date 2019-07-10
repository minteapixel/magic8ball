import './styles/styles.scss';

// VARIABLES ==========
let answer = document.getElementById("answer");
let btn__askBall = document.getElementById("btn__askBall");
let beforeAnswer = document.getElementById("before-answer");

let answerArray = [
  "It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."
];
let answerMsg;

// FUNCTIONS ==========
const insertAnswer = (answerMsg) => {
  return answer.innerText=answerMsg;
}

const randomAnswer = (arr) => {
  return answerMsg = '"' + arr[Math.floor(Math.random() * arr.length)] + '"';
}

const askBallFunc = () => {
  insertAnswer(randomAnswer(answerArray));
  btn__askBall.innerText="Ask again?";
  beforeAnswer.classList.remove("section--hidden");
  return console.log("answer: ", answerMsg);
}

btn__askBall.addEventListener("click", askBallFunc);