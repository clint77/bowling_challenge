console.log("hi, clint");

var bowling = new BowlingScorecard();

$(document).ready(function() {
  $('#totalScoreText').text(bowling.totalScore);
  $('#frameNumber').text(1);

  $('#firstShotOutput').text(bowling.frameScore);

  $('.firstShot').on('click', function() {
    var input = parseInt(document.getElementById("firstShotInput").value);
    var index = bowling.currentFrame;
    bowling.frameScore = input;
    $('#firstShotOutput').text(input);
    $("#1stRoll" + index).text(input);
    $("#frameTotal" + index).text(bowling.frameScore);
    bowling.currentFrame = bowling.currentFrame + 1;
    if (bowling.currentFrame <= 11) {
      bowling.updateTotalScore();
      $('#totalScoreText').text(bowling.totalScore);
      if (bowling.currentFrame <= 10) {
        $('#frameNumber').text(bowling.currentFrame);
      }
    }
  
  });

});

