# Hogwart-s-Sorting-House-
Attend the Sorting Hat House to get sorted into a house!
//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var tatbScore = 0;
var hpScore = 0;
var lfeScore = 0;
var hgScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//Q2 variables
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

//Q3 variables
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

//Result
var result = document.getElementById("result");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", tatb);
q1a2.addEventListener("click", lfe);
q1a3.addEventListener("click", hg);
q1a4.addEventListener("click", hp);

q2a1.addEventListener("click", tatb);
q2a2.addEventListener("click", lfe);
q2a3.addEventListener("click", hg);
q2a4.addEventListener("click", hp);

q3a1.addEventListener("click", tatb);
q3a2.addEventListener("click", lfe);
q3a3.addEventListener("click", hg);
q3a4.addEventListener("click", hp);

q4a1.addEventListener("click", tatb);
q4a2.addEventListener("click", lfe);
q4a3.addEventListener("click", hg);
q4a4.addEventListener("click", hp);

//#TODO: Define quiz functions here
function tatb() {
  tatbScore += 1;
  questionCount += 1;
  // alert("One Point to TALB");
  if (questionCount >= 4) {
    updateResult();
  }
}

function lfe() {
  lfeScore += 1;
  questionCount += 1;
  // alert("One Point to LFE");
  if (questionCount >= 4) {
    updateResult();
  }
}

function hg() {
  hgScore += 1;
  questionCount += 1;
  //alert("One Point to HG");
  if (questionCount >= 4) {
    updateResult();
  }
}

function hp() {
  hpScore += 1;
  questionCount += 1;
  // alert("One Point to HP");
  if (questionCount >= 4) {
    updateResult();
  }
}

function updateResult(){
  if (tatbScore >=2){
    result.innerHTML = "Ravenclaw!";
  }
  else if (lfeScore >=2){
    result.innerHTML = "Slytherin!";
  }
  else if (hgScore >=2){
    result.innerHTML = "Gryffindor!";
  }
  else if (hpScore >=2){
    result.innerHTML = "Hufflepuff!";
  }
  else {
    result.innerHTML = "All houses would be very happy to take you! Choose your house!";
  }
}

