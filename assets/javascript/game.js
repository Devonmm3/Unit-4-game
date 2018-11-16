    var random = Math.floor(Math.random() * 120) + 19;

    var valueCrystal1 = Math.floor(Math.random() * 12) + 1;
    var valueCrystal2 = Math.floor(Math.random() * 12) + 1;
    var valueCrystal3 = Math.floor(Math.random() * 12) + 1;
    var valueCrystal4 = Math.floor(Math.random() * 12) + 1;

    var guessTotal = 0;
    var wins = 0;
    var losses = 0;

    $(document).ready(function () {
                $("#computersNumber").text(random);
                $("#numberWins").text(wins);
                $("#numberLosses").text(losses);

                function reset() {
                    random = Math.floor(Math.random() * 120) + 19;
                    console.log(random);
                    $("computersNumber").text(random);

                }