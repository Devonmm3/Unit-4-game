$(document).ready(function () {
    console.log("go");

    var gameNumber = Math.floor(Math.random() * 101 + 19);
    console.log("Game number: " + gameNumber);
    $(".gameNumber").html(gameNumber);
    var valueCrystal1 = Math.floor(Math.random() * 11 + 1);
    console.log(valueCrystal1);
    var valueCrystal2 = Math.floor(Math.random() * 11 + 1);
    console.log(valueCrystal2);
    var valueCrystal3 = Math.floor(Math.random() * 11 + 1);
    console.log(valueCrystal3);
    valueCrystal4 = Math.floor(Math.random() * 11 + 1);
    console.log(valueCrystal4);
    var wins = 0;
    $("#numberWins").html("Wins: " + wins);
    var losses = 0;
    $("#numberLosses").html("Losses: " + losses);

    var totalScore = 0;
    console.log(totalScore);
    $("#totalScore").html(totalScore);



    function addToTotalScore(valueCrystal) {
        console.log(valueCrystal);
        totalScore = totalScore + valueCrystal;
        console.log("Total score: " + totalScore);
    }


    function resetGame() {
        valueCrystal1 = Math.floor(Math.random() * 11 + 1);
        valueCrystal2 = Math.floor(Math.random() * 11 + 1);
        valueCrystal3 = Math.floor(Math.random() * 11 + 1);
        valueCrystal4 = Math.floor(Math.random() * 11 + 1);
        totalScore = 0;
        $("#totalScore").html(totalScore);
        gameNumber = Math.floor(Math.random() * 101 + 19);
        $(".gameNumber").html(gameNumber);


    }


    $("#crystal1").on("click", function () {
        addToTotalScore(valueCrystal1);
        if (totalScore === gameNumber) {
            wins++;
            $("#numberWins").html("Wins: " + wins);
            resetGame();
        }
        if (totalScore > gameNumber) {
            losses++;
            $("#numberLosses").html("Losses: " + losses);
            resetGame();
        }


        $("#totalScore").text(totalScore);
        console.log(valueCrystal1);
    });

    $("#crystal2").on("click", function () {
        addToTotalScore(valueCrystal2);
        if (totalScore === gameNumber) {
            wins++;
            $("#numberWins").html("Wins: " + wins);
            resetGame();
        }

        if (totalScore > gameNumber) {
            losses++;
            $("#numberLosses").html("Losses: " + losses);
            resetGame();
        }


        $("#totalScore").html(totalScore);
        console.log(valueCrystal2);
    });

    $("#crystal3").on("click", function () {
        addToTotalScore(valueCrystal3);
        if (totalScore === gameNumber) {
            wins++;
            $("#numberWins").html("Wins: " + wins);
            resetGame();
        }

        if (totalScore > gameNumber) {
            losses++;
            $("#numberLosses").html("Losses: " + losses);
            resetGame();
        }

        $("#totalScore").html(totalScore);
        console.log(valueCrystal3);
    });

    $("#crystal4").on("click", function () {
        addToTotalScore(valueCrystal4);
        if (totalScore === gameNumber) {
            wins++;
            $("#numberWins").html("Wins: " + wins);
            resetGame();
        }

        if (totalScore > gameNumber) {
            losses++;
            $("#numberLosses").html("Losses: " + losses);
            resetGame();
        }

        $("#totalScore").html(totalScore);
        console.log(valueCrystal4);
    });
});