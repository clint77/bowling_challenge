var BowlingScorecard = function() {
  this.gameFrames = 10;
  this.standingPins = 10;
  this.maxPinHitPerShot = 10;
  this.shotsLeft = 2;
  this.strike = false;
};

BowlingScorecard.prototype.pinsHit = function(hitPins) {
  this.standingPins = this.standingPins - hitPins;
  return this.standingPins;
};

BowlingScorecard.prototype.strike_check = function() {
    if (this.standingPins === 0) { 
      this.strike = true 
    } 
    else {
      this.strike = false
    };
};