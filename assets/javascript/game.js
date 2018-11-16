$(document).ready(function () {
    console.log("go");


    var valueCrystal1 = Math.floor(Math.random() * 12 + 1);
    console.log(valueCrystal1);
    var valueCrystal2 = Math.floor(Math.random() * 12 + 1);
    console.log(valueCrystal2);
    var valueCrystal3 = Math.floor(Math.random() * 12 + 1);
    console.log(valueCrystal3);
    var valueCrystal4 = Math.floor(Math.random() * 12 + 1);
    console.log(valueCrystal4);
    var guessTotal = 0;
    var wins = 0;
    var losses = 0;
    var gameNumber = Math.floor(Math.random() * 102 + 19);
    console.log(gameNumber);
    $("#computersNumber").text(gameNumber);
    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);


    $("#valueCrystal1").on("click", function () {
        console.log(valueCrystal1);
    });
    $("#valueCrystal2").on("click", function () {
        console.log(valueCrystal2);
    });
    $("#valueCrystal").on("click", function () {
        console.log(valueCrystal3);
    });
    $("#valueCrystal").on("click", function () {
        console.log(valueCrystal4);
    });
});