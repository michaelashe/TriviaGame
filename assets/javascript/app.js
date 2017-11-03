$("#start").on("click", function(){
    game.start();

})

$(document).on('click', '#end', function() {
    game.done();
})


  var questions = [

    {
       question: "Which wrestler has held the World Heavyweight Championship 16 times?",
       choices: ["Ric Flair", "Steve Austin", "John Cena"],
       correctAnswer: "Ric Flair",
     },

     {
       question: "Which wrestler had the longest undefeated streak at Wrestlemania?",
       choices: ["Shawn Michaels", "The Undertaker", "Bret Hart"],
       correctAnswer: "The Undertaker",
      },

     {
       question: "Rick and Scott Steiner were a tag team known as?",
       choices: ["The Road Warriors", "The Steiner Brothers", "The Fabulous Freebirds"],
       correctAnswer: "The Steiner Brothers", 
      },

     {
       question: "Stone Cold Steve Austin's birth name is?",
       choices: ["Steve Allen", "Steve Williams", "Steve Anderson"],
       correctAnswer: "Steve Williams",
     }
   ];

   var game = {
      correct: 0,
      incorrect: 0,
      counter: 50,
      countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
          console.log("Time Up")
          game.done();
        }
      },
  start: function(){
    timer = setInterval(game.countdown,1000);
    $("#subwrapper").prepend('<h2>Time Remaining: <span id="counter">50</span> Seconds</h2>');
    $("#start").remove();
      for(var i=0; i < questions.length; i++) {
          $("#subwrapper").append("<h2>" + questions[i].question + "</h2>")
        for(var j=0; j < questions[i].choices.length; j++) {
          $("#subwrapper").append("<input type='radio'name='question-"+i+"' value='"+questions[i].choices[j]+"'>"+ "  " + questions[i].choices[j] + " ")
        }
      }
      $("#subwrapper").append('<br><br><br><button id="end" type="button" class="btn btn-primary">Submit</button>');
    },
    done: function(){
      $.each($("input[name='question-0']:checked"), function() {
        if($(this).val()==questions[0].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-1']:checked"), function() {
        if($(this).val()==questions[1].correctAnswer){
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-2']:checked"), function() {
        if($(this).val()==questions[2].correctAnswer){
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-3']:checked"), function() {
        if($(this).val()==questions[3].correctAnswer){
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

         this.result();
        },


        result: function(){
          clearInterval(timer);
          $("#subwrapper h2").remove();

          $("#subwrapper").html("<h2>All Done!</h2>");
          $("#subwrapper").append("<h3>Correct Answers: "+this.correct+"</h3>");
          $("#subwrapper").append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
          $("#subwrapper").append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
        }
}
