//you refresh the page and a new number pops up in the gameNumber box

$(document).ready(function () {


    //the number of "wins" and "losses" increases at the end of each round of them game, based on whether the user matches the number or not.
    var wins = 0;
    var losses = 0;

    startGame();

    function startGame() {
        console.log("go");
        var gameNumber = Math.floor(Math.random() * 102 + 19);
        console.log("Game number: " + gameNumber);
        $(".gameNumber").text(gameNumber);

        //each crystal gets a set value for the length of that game.  The value stays the same until the uses "wins" or "loses".    
        var valueCrystal = []
        valueCrystal[0] = Math.floor(Math.random() * 12 + 1);
        console.log(valueCrystal[0]);
        valueCrystal[1] = Math.floor(Math.random() * 12 + 1);
        console.log(valueCrystal[1]);
        valueCrystal[2] = Math.floor(Math.random() * 12 + 1);
        console.log(valueCrystal[2]);
        valueCrystal[3] = Math.floor(Math.random() * 12 + 1);
        console.log(valueCrystal[3]);

        console.log(valueCrystal)

        //the total score box consists of the sum of the crystal values selected by the user.  It updates each time one of the crystals is clicked.
        var totalScore = 0;
        console.log(totalScore);
        $("#totalScore").text(totalScore);



        //the gameNumber is the random number generated by the computer at the start of each game, and it is in between 20-120

        //in the gameNumber box, the number is displayed and is refreshed (changed) each time a new round/game starts

        //in the wins and losses box, the wins are displayed and refreshed each time a new round/game starts
        $("#numberWins").html(wins);
        $("#numberLosses").html(losses);

        //total score starts at 0, and each time one of the crystals is clicked, the value of that crystal is added to the total score and displayed in the total score box.
        //function needs to add the value of the crystal each time it is clicked to the total score that is increased with each click
        function addToTotalScore(valueCrystal) {
            console.log(valueCrystal);
            totalScore = totalScore + valueCrystal;
            console.log("Total score: " + totalScore);
        }


        //the total score box needs to show the user what his or her score is and continues to update in html each time a crystal is clicked
        function updateScoreElement() {
            $("#totalScore").html(totalScore);
        }
        //html allows you to tag html right into the JS(you can use <b></b> or <p></p>), if you do text, it will show exactly what you type. 

        //when crystal1 is clicked, the value needs to be added to the total score
        $("#crystal1").on("click", function () {
            addToTotalScore(valueCrystal[0]);
            if (totalScore === gameNumber) {
                wins++;
                $("#numberWins").html(wins);
                startGame();
            } else if (totalScore > gameNumber) {
                losses++;
                $("#numberLosses").html(losses);
                startGame();
            }
            $("#totalScore").text(totalScore);
            console.log("total score is " + totalScore)
            console.log(valueCrystal[0]);
        });
        //when crystal2 is clicked, the value needs to be added to the total score
        $("#crystal2").on("click", function () {
            addToTotalScore(valueCrystal[1]);
            if (totalScore === gameNumber) {
                wins++;
                $("#numberWins").html(wins);
                startGame();
            } else if (totalScore > gameNumber) {
                losses++;
                $("#numberLosses").html(losses);
                startGame();
            }
            $("#totalScore").html(totalScore);
            console.log(valueCrystal[1]);
        });
        //when crystal3 is clicked, the value needs to be added to the total score
        $("#crystal3").on("click", function () {
            addToTotalScore(valueCrystal[2]);
            if (totalScore === gameNumber) {
                wins++;
                $("#numberWins").html(wins);
                startGame();
            } else if (totalScore > gameNumber) {
                losses++;
                $("#numberLosses").html(losses);
                startGame();
            }
            $("#totalScore").html(totalScore);
            console.log(valueCrystal[2]);
        });
        //when crystal4 is clicked, the value needs to be added to the total score
        $("#crystal4").on("click", function () {
            addToTotalScore(valueCrystal[3]);
            if (totalScore === gameNumber) {
                wins++;
                $("#numberWins").html(wins);
                startGame();
            } else if (totalScore > gameNumber) {
                losses++;
                $("#numberLosses").html(losses);
                startGame();
            }

            $("#totalScore").html(totalScore);
            console.log(valueCrystal[3]);
        });
    };

});