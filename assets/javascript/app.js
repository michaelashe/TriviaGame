$(document).ready(function() {
  number = 45;
  var intervalId = [];
  var correctAnswer = 0;
  var wrongAnswer = 0;
  var unanswered = 0;


  confirm("Start Quiz?")
      run();

  function run() {
      intervalId = setInterval(decrement, 1000);
  };

  function decrement() {
        number--;
        $("#counter").html("<h2>" + number + "</h2>");
          console.log(intervalId);
          if (number === 0) {
            clearInterval(intervalId);
            alert("Time's Up!");
            }

          if (number === 0) {
            $("#message").append("<h2>Correct Answers: " + correctAnswer + "</h2>");
            $("#message").append("<h2>Incorrect Answers: " + wrongAnswer + "</h2>");
            $("#message").append("<h2>Unanswered Questions: " + unanswered + "</h2>");
          }  
      };

  var questions = [

    {
      question: "Which wrestler has held the World Heavyweight Championship 16 times?",
      choices: ["Ric Flair", "Steve Austin","John Cena"],
      answer:    "Ric Flair",
    },

    {
      question: "Which wrestler had the longest undefeated streak at Wrestlemania?",
      choices: ["Shawn Michaels", "The Undertaker", "Bret Hart"],
      answer:    "The Undertaker",
     },

    {
      question: "Rick and Scott Steiner were a tag team known as?",
      choices: ["The Road Warriors", "The Steiner Brothers", "The Fabulous Freebirds"],
      answer:    "The Steiner Brothers", 
     },

    {
      question: "Stone Cold Steve Austin's birth name is?",
      choices: ["Steve Allen", "Steve Williams", "Steve Anderson"],
      answer: "Steve Williams",
    }
  ];


for (var i = 0; i < questions.length; i++) {
  // adding the text of the question to HTML
   var questionText = document.createElement("p");
   questionText.innerHTML = questions[i].question;
  $("#quiz").append("<p>" + questions[i].question + "</p>");

    for (var j = 0; j < 3; j++) {
    $("#quiz").append("<input type='radio' name='"+i+"' >" + questions[i].choices[j] + "</input>");

    }
}
//Create an answer key that we can compare to user input
var answerKey = [questions[0].choices[0], questions[1].choices[1], questions[2].choices[1], questions[3].choices[2]];
console.log(answerKey);

//How do you log radio button inputs from user?


//When the submit button is pressed, tally answers into correct or incorrect responses

$("#submitButton").click(function() {

//Testing Button
  alert("You Pressed Me!");


});


console.log(questions[0].choices[0]);



});