// GLOBAL VARIABLES ====================================================================================================================

//FUNCTIONS ============================================================================================================================

    
$("#startGame").click(function(){
         document.getElementById("after_submit").style.visibility = "visible";
         $(this).fadeOut("fast");
});


$("#submitButton").click(function(){
         document.getElementById("after_submit").style.visibility = "hidden";
         checkAnswer();
    
});


function checkAnswer(){
    
var question1 = document.quiz.question1.value;
var correct = 0;
    
if (question1 == "Brave") {
    correct++;
    alert("You got " + correct + " right");
    }
}