$(document).ready(function () {


    var randomNumber = Math.floor(Math.random() * (101) + 19);
    var wins = 0;
    var losses = 0;
    $("#randNumber").html(randomNumber);
    $("#winNumber").html(wins);
    $("#lossNumber").html(losses);

    var blue = Math.floor(Math.random() * (12));
    var green = Math.floor(Math.random() * (12));
    var white = Math.floor(Math.random() * (12));
    var purple = Math.floor(Math.random() * (12));

    $("#blueGem").on("click", function () {
        totalScore = totalScore + blue;
    })

    $("#purpleGem").on("click", function () {
        totalScore = totalScore + purple;
    })
    $("#greenGem").on("click", function () {
        totalScore = totalScore + green;
    })
    $("#whiteGem").on("click", function () {
        totalScore = totalScore + white;
    })

    if (totalScore === randomNumber) {
        wins++;
        $("#winNumber").html(wins);
        alert("You Win!");
    }
    if (totalScore > randomNumber) {
        losses++;
        $("#lossNumber").html(losses);
        alert("You Lose!");
        reset;
    }

    function reset() {
        totalScore = 0;
        var blue = Math.floor(Math.random() * (12));
        var green = Math.floor(Math.random() * (12));
        var white = Math.floor(Math.random() * (12));
        var purple = Math.floor(Math.random() * (12));

        var randomNumber = Math.floor(Math.random() * (101) + 19);
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