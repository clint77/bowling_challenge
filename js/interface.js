console.log("hi, clint");

var bowling = new BowlingScorecard();

var updateScores = function() {

};

$(document).ready(function() {
  $('#totalScoreText').text(bowling.totalScore);
  $('#frameNumber').text(1);
  $('.shotNumberText').text("first");
  var index = 1;

  $('.firstShot').on('click', function() {
    var playerInput = parseInt(document.getElementById("firstShotInput").value);

    if ( (bowling.shotsLeft == 2) && (index <= 10) ) 
    {
      bowling.firstShot(playerInput);
      $("#1stRoll" + index).text(playerInput);
      $("#frameTotal" + index).text(bowling.frameScore);
      if (bowling.strike == false) 
      { 
        $('.shotNumberText').text("second");
      }
      else if (playerInput == 10) 
      {
        if (bowling.currentFrame <= 10) {
          $('#frameNumber').text(bowling.currentFrame);
        }
        bowling.updateTotalScore();
        $('#totalScoreText').text(bowling.totalScore);
        bowling.shotsLeft = 2;
        index += 1;
      };
    }
    else if ( (bowling.shotsLeft == 1) && (index <= 10) ) {
      bowling.secondShot(playerInput);
      $("#2ndRoll" + index).text(playerInput);
      $("#frameTotal" + index).text(bowling.frameScore);
      $('.shotNumberText').text("first");
      if (bowling.currentFrame <= 10) {
        $('#frameNumber').text(bowling.currentFrame);
      }
       bowling.updateTotalScore();
      $('#totalScoreText').text(bowling.totalScore);
      bowling.shotsLeft = 2;
      index += 1;
    };
  
  });

});

