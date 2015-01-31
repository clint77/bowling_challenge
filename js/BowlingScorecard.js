var BowlingScorecard = function() {
  this.gameFrames = 10;
  this.currentFrame = 1;
  this.totalScore = 0;
  this.standingPins = 10;
  this.maxPinHitPerShot = 10;
  this.frameScore = 0;
  this.shotsLeft = 2;
  this.strike = false;
  this.spare = false;
};

BowlingScorecard.prototype.firstShot = function(hitPins) {
  this.shotsLeft -= 1;
  this.standingPins = this.standingPins - hitPins;
  this.strike_check();
  this.frameScore = hitPins;
  return this.standingPins;
};

BowlingScorecard.prototype.secondShot = function(hitPins) {
  this.shotsLeft -= 1;
  this.standingPins = this.standingPins - hitPins;
  this.currentFrame += 1;
  this.frameScore = this.frameScore + hitPins;
  return this.standingPins;
};

BowlingScorecard.prototype.strike_check = function() {
  if (this.shotsLeft === 1) {
    if (this.standingPins === 0) { 
      this.strike = true;
      this.currentFrame += 1;
    } 
    else {
      this.strike = false;
    }
  }
};

BowlingScorecard.prototype.spare_check = function() {
  if ( (this.strike == false) && (this.standingPins == 0) ) {
    this.spare = true
  }
  else {
    this.spare = false
  }
};

BowlingScorecard.prototype.updateTotalScore = function() {
  this.totalScore = this.totalScore + this.frameScore;
};






