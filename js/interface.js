console.log("hi, clint");

var bowling = new BowlingScorecard();

var updateScores = function() {
  $('#frameNumber').text(bowling.currentFrame);
  $('#totalScoreText').text(bowling.totalScore);
};

$(document).ready(function() {
  updateScores();

  $('#firstShotOutput').text(bowling.frameScore);

  $('.firstShot').on('click', function() {
    var input = parseInt(document.getElementById("firstShotInput").value);
    var index = bowling.currentFrame;
    bowling.frameScore = input;
    $('#firstShotOutput').text(input);
    $("#" + index).text(input);
    $("#frameTotal" + index).text(bowling.frameScore);

    bowling.currentFrame += 1;
    bowling.updateTotalScore();
    updateScores();
  });

});

