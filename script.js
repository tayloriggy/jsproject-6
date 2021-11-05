/*
-Create an HTML form with a three-question quiz //HTML
-Each question should have four multiple-choice answers to choose from. //HTML
-When the user submits the quiz, add a message underneath each question letting them know 
if they got it right/wrong (give them the correct answer). //JS part

Using a function...
Need to track which radio button is selected at time of submittal 
Once form is submitted, display the correct answers beneath each question and let the user know if the radio button (choice) they selected 
was right or wrong.


*/



function submitAnswers () {
    firstQuestion(); //runs function for first question
    secondQuestion(); //runs function for second question
    thirdQuestion(); //runs function for third question
    
}

function firstQuestion () {
    
    if (document.getElementById("8").checked) {
       document.getElementById("first").innerHTML = "Question 1: Right! The correct answer is 8.";
    }

    else {
        document.getElementById("first").innerHTML = "Question 1: Wrong! The correct answer is 8.";
    }
}

function secondQuestion () {

    if (document.getElementById("d").checked) {
        document.getElementById("second").innerHTML = "Question 2: Right! The correct answer is Blue and Red.";
    }

    else {
        document.getElementById("second").innerHTML = "Question 2: Wrong! The correct answer is Blue and Red.";
    }

}

function thirdQuestion () {

    if (document.getElementById("sapiens").checked) {
        document.getElementById("third").innerHTML = "Question 3: Right! The correct answer is Homo sapiens.";
    }

    else {
        document.getElementById("third").innerHTML = "Question 3: Wrong! The correct answer is Homo sapiens.";
    }
}
    

