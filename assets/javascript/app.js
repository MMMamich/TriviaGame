// GLOBAL VARIABLES =========================================================================================================================
var counter = 60;
var timerInterval;


//FUNCTIONS =================================================================================================================================

    
$("#startGame").click(function(){
         document.getElementById("after_submit").style.visibility = "visible";
         document.getElementById("timer").style.visibility = "visible";
         document.getElementById("timerBox").style.visibility = "visible";
         runTimer();
         minusTimer();
         $(this).fadeOut("fast");
        
});


$("#submitButton").click(function(){
         document.getElementById("after_submit").style.visibility = "hidden";
         document.getElementById("timerBox").style.visibility = "visible";
         checkAnswer();
         stopTimer();
         document.getElementById("timerBox").style.visibility = "hidden";
         document.getElementById("timer").style.visibility = "hidden";
         document.getElementById("score").style.visibility = "visible";
    
});


function checkAnswer(){
    
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;    
var question4 = document.quiz.question4.value;    
var question5 = document.quiz.question5.value;    
var question6 = document.quiz.question6.value;    
var question7 = document.quiz.question7.value;    
var question8 = document.quiz.question8.value;    
var question9 = document.quiz.question9.value;
var question10 = document.quiz.question10.value;
        
var correct = 0;
var incorrect = 0;
    
if (question1 == "Incredibles") {
    correct++;
    $("#wins").html(correct);
    console.log(correct + " right");
    }else{  
        incorrect++;
        $("#loses").html(incorrect);
        console.log(incorrect + " wrong"); 
    }
    
if(question2 == "Inner Workings") {  
    correct++;
    $("#wins").html(correct);
    console.log(correct + " right");
    }else{  
        incorrect++;
        $("#loses").html(incorrect);
        console.log(incorrect + " wrong"); 
    }
    
if(question3 == "Coco") {  
    correct++;
    $("#wins").html(correct);
    console.log(correct + " right");
    }else{  
        incorrect++;
        $("#loses").html(incorrect);
        console.log(incorrect + " wrong"); 
    }
   
if(question4 == "Randy Newman") {  
    correct++;
    $("#wins").html(correct);
    console.log(correct + " right");
    }else{  
        incorrect++;
        $("#loses").html(incorrect);
        console.log(incorrect + " wrong"); 
    }

if(question5 == "Newt") {  
    correct++;
    $("#wins").html(correct);
    console.log(correct + " right");
    }else{  
        incorrect++;
        $("#loses").html(incorrect);
        console.log(incorrect + " wrong"); 
    }
    
if(question6 == "Merida") {  
    correct++;
    $("#wins").html(correct);
    console.log(correct + " right");
    }else{  
        incorrect++;
        $("#loses").html(incorrect);
        console.log(incorrect + " wrong"); 
    }
    
if(question7 == "Spot") {  
    correct++;
    $("#wins").html(correct);
    console.log(correct + " right");
    }else{  
        incorrect++;
        $("#loses").html(incorrect);
        console.log(incorrect + " wrong"); 
    }
    
if(question8 == "Cars 2") {  
    correct++;
    $("#wins").html(correct);
    console.log(correct + " right");
    }else{  
        incorrect++;
        $("#loses").html(incorrect);
        console.log(incorrect + " wrong"); 
    }
    
if(question9 == "Angst") {  
    correct++;
    $("#wins").html(correct);
    console.log(correct + " right");
    }else{  
        incorrect++;
        $("#loses").html(incorrect);
        console.log(incorrect + " wrong"); 
    }
    
if(question10 == "P Sherman 42 Wallaby Way Sydney") {  
    correct++;
    $("#wins").html(correct);
    console.log(correct + " right");
    }else{  
        incorrect++;
        $("#loses").html(incorrect);
        console.log(incorrect + " wrong"); 
    }
    
}

function runTimer() {
      timerInterval = setInterval(minusTimer, 1000);
    }

function minusTimer(){
    
    counter--;
    $("#timer").html(counter);
    
    if (counter === 0){
        
        stopTimer();
        alert("No more time!");
        console.log("Counter is 0");
        
    }
    
}

function stopTimer(){
    
    clearInterval(timerInterval);
    checkAnswer();
    document.getElementById("after_submit").style.visibility = "hidden";
    document.getElementById("timerBox").style.visibility = "visible";
    document.getElementById("timerBox").style.visibility = "hidden";
    document.getElementById("timer").style.visibility = "hidden";
    document.getElementById("score").style.visibility = "visible";
}

// $("#timer").html(decreaseTimer);
//var timerInterval = setInterval(counter--, 1000);
// clearInterval(decreaseTimer); 

