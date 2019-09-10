// global variables
let answer = -1;
let score = 0;

$(document).ready(function() {

    generateMathExpression();

    // keypress handler
    $("#answer-textarea").keypress(function(e){
        var key = e.which;
        if (key != 13) return true; // need this to enter any other character that is not an enter key
    
        let response = document.getElementById("answer-textarea").value;
        console.log(response);

        if (response == answer) {
            score++;
            let updatedEquation = document.getElementById("math-question").innerHTML.replace("?", answer);
            document.getElementById("math-question").innerHTML = updatedEquation;
            document.getElementById("math-question").style.color = "green";
            document.getElementById("math-question").style.color = "green";
            $("#math-question").animate({opacity: 0});

            sleep(500).then(() => {
                document.getElementById("math-question").style.color = "black";
                $("#math-question").animate({opacity: 1});
                generateMathExpression();
              });

            document.getElementById("score").innerHTML = "Score: " + score;
        }
        else {
            document.getElementById("math-question").style.color = "red";
        }



        $("#answer-textarea").val("");
        return false; // return false ensures enter keypress is supressed and doesn't add a line break by default

    });
});

function generateMathExpression() {
    let lowest = 1;
    let highest = 10;

    let a = Math.floor( (Math.random() * highest) + lowest );
    let b = Math.floor( (Math.random() * highest) + lowest );

    let lowestType = 1;
    let highestType = 4;

    let randomProblemType = Math.floor( (Math.random() * highestType) + lowestType);
    console.log(randomProblemType);

    switch(randomProblemType) {
        case 1:
            answer = a + b;
            document.getElementById("math-question").innerHTML = a.toString() + " + " + b.toString() + " = ?";
            break;
        case 2:
            answer = a - b;
            document.getElementById("math-question").innerHTML = a.toString() + " - " + b.toString() + " = ?";
            break;
        case 3:
            answer = a * b;
            document.getElementById("math-question").innerHTML = a.toString() + " * " + b.toString() + " = ?";
            break;
        case 4:
            


            if (a > b) {
                while (a % b != 0) {
                    a = Math.floor( (Math.random() * highest) + lowest );
                    b = Math.floor( (Math.random() * highest) + lowest );
                }
                answer = a / b;
                document.getElementById("math-question").innerHTML = `${a.toString()} / ${b.toString()} = ? `
            }
            else {
                while (b % a != 0) {
                    a = Math.floor( (Math.random() * highest) + lowest );
                    b = Math.floor( (Math.random() * highest) + lowest );
                }

                answer = b / a;
                document.getElementById("math-question").innerHTML = `${b.toString()} / ${a.toString()} = ? `
            }
            break;

    }

    
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
// javascript sleep: 


// more code
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Time Left: " + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var sixtySeconds = 60,
        display = document.querySelector('#time');
    startTimer(sixtySeconds, display);
};