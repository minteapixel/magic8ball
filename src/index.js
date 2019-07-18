import './styles/styles.scss';

// VARIABLES ==========
let answer = document.getElementById("answer");
let btn__askBall = document.getElementById("btn__askBall");
let beforeAnswer = document.getElementById("before-answer");
let ballImage = document.getElementById("ballImage");

let answerArray = [
  "It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."
];
let answerMsg;

// FUNCTIONS ==========
//   insert answer into div
const insertAnswer = (answerMsg) => {
  return answer.innerText=answerMsg;
}

//   selects a random answer from array
const randomAnswer = (arr) => {
  return answerMsg = '"' + arr[Math.floor(Math.random() * arr.length)] + '"';
}

// shake animation
const shake = (el) => {
  el.animate ([
    { transform: 'translateX(0px)' },
    { transform: 'translateX(-30px)'},
    { transform: 'translateX(30px)'},
    { transform: 'translateX(-25px)'},
    { transform: 'translateX(0px)'}
  ], {
    duration: 500,
    iterations: 1
  });
}

const afterShake = () => {
  insertAnswer(randomAnswer(answerArray));
  return console.log("answer: ", answerMsg);
};

const askBallFunc = () => {
  beforeAnswer.classList.remove("section--hidden");
  btn__askBall.innerText="Ask again?";
  shake(ballImage);
  afterShake();
}

btn__askBall.addEventListener("click", askBallFunc);