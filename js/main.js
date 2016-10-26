function gradeQuiz() {
    var userScore = 0;
    var answerOne = document.querySelector('input[name="q1"]:checked').value;
    console.log("You chose " + answerOne);
    if (answerOne ==1) {
        userScore += 0;
    } else if (answerOne ==2) {
        userScore += 0;
    } else if (answerOne ==3) {
        userScore += 10;
    } else {
        console.log("Incorrect");
    }
    
    var answerTwo = document.querySelector('input[name="q2"]:checked').value;
console.log("You chose " + answerTwo);
 if (answerTwo ==1) {
        userScore += 0;
    } else if (answerTwo ==2) {
        userScore += 10;
    } else if (answerTwo ==3) {
        userScore += 0;
    } else {
        console.log("Incorrect");
    }
    
    var answerThree = document.querySelector('input[name="q3"]:checked').value;
console.log("You chose " + answerThree);

    if (answerThree ==1) {
        userScore += 0;
    } else if (answerThree ==2) {
        userScore += 10;
    } else if (answerThree ==3) {
        userScore += 0;
    } else {
        console.log("Incorrect");
    }
    
     var answerFour = document.querySelector('input[name="q4"]:checked').value;
console.log("You chose " + answerFour);

if (answerFour ==1) {
    userScore +=10;
    console.log(userScore);
} else if (answerFour ==2) {
    console.log(userScore);
} else {
    console.log("Pick an answer");
}
    
    var answerFive = document.querySelector('input[name="q5"]:checked').value;
console.log("You chose " + answerFive);
if (answerFive ==1) {
    userScore +=0;
    console.log(userScore);
} else if (answerFive ==2) {
    userScore +=10
    console.log(userScore);
} else {
    console.log("Pick an answer");
}

var answerSix = document.querySelector('input[name="q6"]:checked').value;
console.log("You chose " + answerSix);
    if (answerSix ==1) {
    userScore +=0;
    console.log(userScore);
} else if (answerSix ==2) {
        userScore +=10
    console.log(userScore);
} else {
    console.log("Pick an answer");
}

var answerSeven = document.querySelector('input[name="q7"]:checked').value;
console.log("You typed " + answerSeven);

if (answerSeven =="Samus" && "samus") {
    userScore += 10;
    
} else {
    console.log("The answer was Samus or samus");
}
var answerEight = document.querySelector('input[name="q8"]:checked').value;
console.log("You typed " + answerEight);

if (answerEight =="Normandy" && "normandy") {
    userScore += 10;
    
} else {
    console.log("The answer was Normandy or normandy");
}

var answerNine = document.querySelector('input[name="q9"]:checked').value;
console.log("You chosed " + answerNine);

if (answerNine ==1) {
        userScore += 0;
    } else if (answerNine ==2) {
        userScore += 10;
    } else if (answerNine ==3) {
        userScore += 0;
    } else {
        console.log("Incorrect");
    }
    
    var answerTen = document.querySelector('input[name="q10"]:checked').value;
console.log("You chosed " + answerTen);

if (answerTen ==1) {
    userScore +=10;
    console.log(userScore);
} else if (answerTen ==2) {
    console.log(userScore);
} else {
    console.log("Pick an answer");
}

 var answerEleven = document.querySelector('input[name="q11"]:checked').value;
console.log("You chosed " + answerEleven);

if (answerEleven ==1) {
        userScore += 10;
    } else {
        console.log("Incorrect");
    }
    
var answerTwelve = document.querySelector('input[name="q12"]:checked').value;
console.log("You chosed " + answerTwelve);

if (answerTwelve ==2){
        userScore += 10;
} else {
    console.log("Incorrect");
}

var answerThirteen = document.querySelector('input[name="q13"]:checked').value;
console.log("You chosed " + answerThirteen);

if (answerThirteen ==3) {
        userScore +=10;
} else {
    console.log("Incorrect");
}

var answerFourteen = document.querySelector('input[name="q14"]:checked').value;
console.log("You chosed " + answerFourteen);

if (answerFourteen ==4) {
        userScore +=10;
} else {
    console.log("Incorrect");
}

var answerFifteen = document.querySelector('input[name="q15"]:checked').value;
console.log("You chosed " + answerFifteen);

if (answerFifteen ==1) {
    userScore +=10;
    console.log(userScore);
} else {
    console.log("Pick an answer");
}

var answerSixteen = document.querySelector('input[name="q16"]:checked').value;
console.log("You chosed " + answerSixteen);

if (answerSixteen ==2) {
    userScore +=10;
} else {
    console.log("Pick an answer");
}

var answerSeventeen = document.querySelector('input[name="q17"]:checked').value;
console.log("You chosed " + answerSeventeen);

if (answerSeventeen ==1) {
    userScore +=10;
} else {
    console.log("Pick an answer");
}

var answerEighteen = document.querySelector('input[name="q18"]:checked').value;
console.log("You chosed " + answerEighteen);

if (answerEight =="Pokemon Red" && "pokemon red") {
    userScore += 10;
    
} else {
    console.log("The answer was Pokemon Red or pokemon red");
}

var answerNineteen = document.querySelector('input[name="q19"]:checked').value;
console.log("You chosed " + answerNineteen);

if (answerNineteen =="Street Fighter" && "street fighter") {
    userScore += 10;
} else {
    console.log("The answer was Street Fighter or street fighter");
}

var answerTwenty = document.querySelector('input[name="q20"]:checked').value;
console.log("You chosed " + answerTwenty);

if (answerTwenty =="Clementine" && "clementine") {
    userScore += 10
} else {
    console.log("The answer was Clementine or clementine");
}

console.log("Your current score is" + userScore);

if (userScore == 200) {
    console.log("You got a perfect score!");
    document.getElementById("userResult").innerHTML = "You got a perfect score!";
} else if (userScore == 190) {
    console.log("You got a very good score!");
    document.getElementById("userResult").innerHTML = "You got a very good score!";
} else if (userScore == 180) {
   console.log("You got a very good score!");
    document.getElementById("userResult").innerHTML = "You got a very good score!"; 
} else if (userScore == 170) {
    console.log("You got a very good score!");
    document.getElementById("userResult").innerHTML = "You got a very good score!";
} else if (userScore == 160) {
    console.log("You got a very good score!");
    document.getElementById("userResult").innerHTML = "You got a very good score!";
} else if (userScore == 150) {
    console.log("You got a very good score!");
    document.getElementById("userResult").innerHTML = "You got a very good score!";
} else if (userScore == 140) {
    console.log("You got a very good score!");
    document.getElementById("userResult").innerHTML = "You got a very good score!";
} else if (userScore == 130) {
    console.log("You got a very good score!");
    document.getElementById("userResult").innerHTML = "You got a very good score!";
} else if (userScore == 120) {
    console.log("You got a very good score!");
    document.getElementById("userResult").innerHTML = "You got a very good score!";
} else if (userScore == 110) {
    console.log("You got a very good score!");
    document.getElementById("userResult").innerHTML = "You got a very good score!";
} else if (userScore == 100) {
console.log("You have a good score!");
    document.getElementById("userResult").innerHTML = "You have a good score!";

} else if (userScore == 90) {
    console.log("You have a good score!");
    document.getElementById("userResult").innerHTML = "You have a good score!";
} else if (userScore == 80) {
    console.log("You have a good score!");
    document.getElementById("userResult").innerHTML = "You have a good score!";
} else if (userScore == 70) {
    console.log("You have a good score!");
    document.getElementById("userResult").innerHTML = "You have a good score!";
} else if (userScore == 60) {
    console.log("You has an ok score.");
    document.getElementById("userResult").innerHTML = "You has an ok score.";
} else if (userScore == 50) {
        console.log("You has an ok score.");
    document.getElementById("userResult").innerHTML = "You has an ok score.";
} else if (userScore == 40) {
        console.log("You have a bad score.");
    document.getElementById("userResult").innerHTML = "You have a bad score.";
} else if (userScore == 30) {
     console.log("You have a bad score.");
    document.getElementById("userResult").innerHTML = "You have a bad score.";
} else if (userScore == 20) {
     console.log("You have a very bad score!");
    document.getElementById("userResult").innerHTML = "You have a very bad score!";
} else if (userScore == 10) {
     console.log("You have a very bad score!");
    document.getElementById("userResult").innerHTML = "You have a very bad score!";
} else if (userScore == 0) {
     console.log("YOU FAILED!");
    document.getElementById("userResult").innerHTML = "YOU FAILED!";
}


}
