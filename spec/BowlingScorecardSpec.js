describe('Thermostat', function() {

  var bowlingScorecard;

  beforeEach(function() {
    bowlingScorecard = new BowlingScorecard();
  });

  describe('by defualt', function() {

    it('has 10 game frames', function() {
      expect(bowlingScorecard.gameFrames).toEqual(10);
    });

    it('has 10 standing pins at the start of each frame', function () {
      expect(bowlingScorecard.standingPins).toEqual(10);
    });

    it('has a max of 2 shots each frame', function() {
      expect(bowlingScorecard.shotsLeft).toEqual(2);
    });

  });

  describe('scoring', function() {

    it('maximum number of pins that can be hit per shot is 10', function() {
      expect(bowlingScorecard.maxPinHitPerShot).toEqual(10);
    });

    it('can hit pins', function() {
      bowlingScorecard.pinsHit(7);
      expect(bowlingScorecard.standingPins).toEqual(3);
    });

    it('can tell if it is a strike', function() {
      bowlingScorecard.pinsHit(10);
      bowlingScorecard.strike_check();
      expect(bowlingScorecard.strike).toBe(true);
    });

    it('can tell if it is not a strike', function() {
      bowlingScorecard.pinsHit(9);
      bowlingScorecard.strike_check();
      expect(bowlingScorecard.strike).toBe(false);
    });

    it('can tell if it is a spare', function() {
      bowlingScorecard.pinsHit(6);
      bowlingScorecard.pinsHit(4);
      expect(bowlingScorecard.strike).toBe(false);
    });

  });

});















