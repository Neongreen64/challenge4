var questionCard = document.querySelector(".questionCard");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var num1 =  document.getElementById("num1");
var score = document.querySelector(".score");
var leaderboard = document.querySelector(".leaderboard");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var cardTimer = document.querySelector(".timer");
var questionguess = document.querySelector(".question-guess");

var chosenQuestion = "";
var chosenAnswer = "";
var scoreCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;


// Arrays of questions, answers, and wrong answers
var questions = ["A loop that iterates a fixed amount of times is called a...","A loop that iterates until a condition is met is called a...", "What's the shorthand way of incrementing a variable?"];
var answers = ["for loop","while loop", "++"];
var fillerAnswers = ["switch statement", "--", "%", "&&", "roblox", "now loop", "how loop", "then loop"];


// The init function is called when the page loads 
function init() {
  getWins();
  getLeaderBoard();
}

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 15;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  renderQuestion();
  startTimer();
  startButton.remove();
  
}


// The loseGame function is called when timer reaches 0
function loseGame() {
    
    setLeaderboard();
    cardTimer.style.display = "none";
    questionguess.style.display = "none";
    
    startButton.disabled = false;

}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

// Creates the question text and labels the buttons
function renderQuestion() {
  // Randomly picks a question from questions array

    var numberGen = Math.floor(Math.random() * questions.length);
    chosenQuestion = questions[numberGen];
    chosenAnswer = answers[numberGen];

    //Randomly picks a button to put the correct answer on
    varButtonPick = Math.floor(Math.random() * 4);
    buttons = [button1, button2, button3, button4];

    buttons[varButtonPick].textContent = chosenAnswer;

    //Labels each button, if the button is the one with the correct answer, it will be skipped
    for(var x = 0; x < 4; x++){
        if(x == varButtonPick){
            
        }
        else{
            var badAnswer = Math.floor(Math.random() * fillerAnswers.length);
            buttons[x].textContent = fillerAnswers[badAnswer];

        }
    }

    questionCard.textContent = chosenQuestion;

}

// Updates win count on screen and sets win count to client storage
function setWins() {
  score.textContent = scoreCounter;
  localStorage.setItem("scoreCount", scoreCounter);
}

function setLeaderboard(){
   // var newPlayer = document.createElement("li");
   // var playerName = prompt("Enter your name!");
  //  newPlayer.appendChild(document.createTextNode(playerName));
   // newPlayer.appendChild(document.createTextNode(scoreCounter));
    //leaderboard.appendChild(newPlayer);
    //localStorage.setItem("players", newPlayer);
    var playerName = prompt("Enter your name!");
    num1.textContent = playerName + " " + scoreCounter;

    localStorage.setItem("player", playerName);
    localStorage.setItem("score", scoreCounter);

}

// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
  var storedScore = localStorage.getItem("scoreCount");
  // If stored value doesn't exist, set counter to 0
  if (storedStored === null) {
    scoreCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    scoreCounter = storedScore;
  }
  //Render win count to page
  win.textContent = winCounter;
}

function getLeaderBoard() {
  var storedPlayer = localStorage.getItem("player");
  var storedScore = localStorage.getItem("score");
  if (storedPlayer === null) {
    
  } else {
    num1.textContent = storedPlayer + " " + storedScore;
  }
}


// Attach event listener to each button and increase/decrease score by 100, set the score, and render the next question
button1.addEventListener("click", function(){
    if (button1.textContent === chosenAnswer){
        scoreCounter += 100;
        setWins();
        renderQuestion();
    }
    else{
        scoreCounter-= 100;
        setWins();
        renderQuestion();
    }
});
button2.addEventListener("click", function(){
    if (button2.textContent === chosenAnswer){
        scoreCounter += 100;
        setWins();
        renderQuestion();
    }
    else{
        scoreCounter-= 100;
        setWins();
        renderQuestion();
    }
});
button3.addEventListener("click", function(){
    if (button3.textContent === chosenAnswer){
        scoreCounter += 100;
        setWins();
        renderQuestion();
    }
    else{
        scoreCounter-= 100;
        setWins();
        renderQuestion();
    }
});
button4.addEventListener("click", function(){
    if (button4.textContent === chosenAnswer){
        scoreCounter += 100;
        setWins();
        renderQuestion();
    }
    else{
        scoreCounter-= 100;
        setWins();
        renderQuestion();
    }
});

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();


