var numToGuess;
var sum;
var wins = 0;
var loses = 0;

function initGame() {
    numToGuess = Math.floor(Math.random() * 100) + 5;
    $('#randNum').html('Number to Match: ' + numToGuess);
    sum = 0;
    $('#totalPoints').html('Your Score: ' + sum)
}

initGame();

$('.btn').click(function () {
    if ($(this).attr('value') === "restart") {
        initGame();

    } else if (sum < numToGuess) {
        sum += parseInt($(this).attr('value'));
        $('#totalPoints').html('Your Score: ' + sum);
        if (sum > numToGuess) {
            $('#totalPoints').html('Your Score: ' + sum);
            alert("You Lose");
            loses++;
            $('#loses').html('Loses: ' + loses)
        } else if (sum === numToGuess) {
            alert("You Win!");
            wins++;
            $('#wins').html('Wins: ' + wins);
        }
    }
});