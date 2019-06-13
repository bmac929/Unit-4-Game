$(document).ready(function () {


    var randomNumber = Math.floor(Math.random() * (102) + 19);
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    $("#randNumber").html(randomNumber);
    $("#winNumber").html(wins);
    $("#lossNumber").html(losses);

    var blue = Math.floor(Math.random() * (12) + 1);
    var green = Math.floor(Math.random() * (12) + 1);
    var white = Math.floor(Math.random() * (12) + 1);
    var purple = Math.floor(Math.random() * (12) + 1);

    $("#blueGem").on("click", function () {
        totalScore = totalScore + blue;
        console.log(totalScore);
        updateScore();
        checkScore();
    })

    $("#purpleGem").on("click", function () {
        totalScore = totalScore + purple;
        updateScore();
        checkScore();
    })
    $("#greenGem").on("click", function () {
        totalScore = totalScore + green;
        updateScore();
        checkScore();
    })
    $("#whiteGem").on("click", function () {
        totalScore = totalScore + white;
        updateScore();
        checkScore();
    })

    function checkScore() {
        if (totalScore === randomNumber) {
            wins++;
            $("#winNumber").html(wins);
            alert("You Win!");
            reset();
        } else if (totalScore > randomNumber) {
            losses++;
            $("#lossNumber").html(losses);
            alert("You Lose!");
            reset();
        }
    }

    function reset() {
        totalScore = 0;
        blue = Math.floor(Math.random() * (12) + 1);
        green = Math.floor(Math.random() * (12) + 1);
        white = Math.floor(Math.random() * (12) + 1);
        purple = Math.floor(Math.random() * (12) + 1);

        randomNumber = Math.floor(Math.random() * (102) + 19);
        updateScore();
        $("#randNumber").html(randomNumber);
    }

    function updateScore() {
        $("#totalScore").html(totalScore);
    }

    /* function add() {
         $("totalScore").attr(blue);
     }
     function addWhite() {
         $("totalScore").add(white);
     }
     function addGreen() {
         $("totalScore").add(green);
     }
     function addPurple() {
         $("totalScore").add(purple);
     }*/
})