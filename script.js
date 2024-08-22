// Задание 1

document.getElementById("element").onmousemove = function(){
  setTimeout( () => {
    document.getElementById("element").innerHTML = 'Урааа';
  }, 5000)
}

const element = getElementById("elemen");

// Задание 2

let div = document.getElementById("Item");
var color = ['green', 'red', 'blue','yellow','brown','black','white','pink'],
colorN = 0;

setInterval(function() {
  Item.style.backgroundColor = color[colorN];
  colorN =  colorN == color.lengt ? 0 : colorN + 1;
},1000);

let timerId = setInterval(() => {
  console.log ('hello')
},1000)

setTimeout (() => {
  clearInterval(timerId)
  console.log('The end')
}, 10000)


// Задание 3






let timerElement = document.getElementById("timer");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let restartButton = document.getElementById("restart");
let input = document.getElementById("minut");
let inputh = document.getElementById("secund")



let seconds = 0;
let intervalId = null;

function updateTimer() {
  let minutes = Math.round(seconds / 60);
  let remainingSeconds = seconds % 60;
  let minutesDisplay = minutes < 10 ? "0" + minutes : minutes;
  let secondsDisplay =
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
  timerElement.textContent = `${minutesDisplay}:${secondsDisplay}`;
}
startButton.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      seconds++;
      updateTimer();
    }, 1000);
    
  }
});
stopButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});
restartButton.addEventListener("click", () => {
  clearInterval(intervalId);
  updateTimer();
  seconds = 0;
  intervalId = null;
});




// Задание 3











// const getPosts = async () => {
//    const responce =  fetch("https://jsonplaceholder.typicode.com/");
//    console.log(responce);
//    responce.then((data) => data.json(m))
// };

// getPosts()



    
























// console.log(timerId)

// let count = 10;
// const res = setInterval(() => {
//   if (count > 0) {
//     console.log(count--);
//   } else {
//     setTimeout(() => {
//       clearInterval(res);
//       console.log("stop");
//     }, 15000);
//   }
// }, 1000);


// let counter = 0;
// const rest = setInterval(() => {
//   if (counter > 15) {
//     console.log(counter++);
//   } else {
//     setTimeout(() => {
//       clearInterval(rest);
//       console.log("stop");
//     }, 15000);
//   }
// }, 1000);













