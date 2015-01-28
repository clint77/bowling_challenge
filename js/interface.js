console.log("hi, clint");

var bowling = new BowlingScorecard();

$(document).ready(function() {
  // updateScores();
  $('#totalScoreText').text(bowling.totalScore);
  $('#frameNumber').text(bowling.currentFrame);

  $('#firstShotOutput').text(bowling.frameScore);

  $('.firstShot').on('click', function() {
    var input = parseInt(document.getElementById("firstShotInput").value);
    var index = bowling.currentFrame;
    bowling.frameScore = input;
    $('#firstShotOutput').text(input);
    $("#1stRoll" + index).text(input);
    $("#frameTotal" + index).text(bowling.frameScore);

    bowling.currentFrame += 1;
    bowling.updateTotalScore();
    updateScores();
  });

});

