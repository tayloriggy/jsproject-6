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
    firstQuestion();
    secondQuestion();
    thirdQuestion();
    
}

function firstQuestion () {
    
    if (document.getElementById("8").checked) {
        alert (`Right! The correct answer is ${document.getElementById("8").value}`);
    }

    else {
        alert (`Wrong! The correct answer is ${document.getElementById("8").value}`);
    }
}

function secondQuestion () {

    if (document.getElementById("d").checked) {
        alert (`Right! The correct answer is ${document.getElementById("d").value}`);
    }

    else {
        alert (`Wrong! The correct answer is ${document.getElementById("d").value}`);
    }

}

function thirdQuestion () {

    if (document.getElementById("sapiens").checked) {
        alert (`Right! The correct answer is ${document.getElementById("sapiens").value}`);
    }

    else {
        alert (`Wrong! The correct answer is ${document.getElementById("sapiens").value}`);
    }
}
    

