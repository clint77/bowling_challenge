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
      bowlingScorecard.firstShot(7);
      expect(bowlingScorecard.standingPins).toEqual(3);
    });

    it('can tell if it is a strike', function() {
      bowlingScorecard.firstShot(10);
      expect(bowlingScorecard.strike).toBe(true);
      bowlingScorecard.firstShot(10);
      expect(bowlingScorecard.strike).toBe(true);
    });

    it('can tell if it is NOT a strike', function() {
      bowlingScorecard.firstShot(9);
      expect(bowlingScorecard.strike).toBe(false);
    });

    it('can tell if it is a spare', function() {
      bowlingScorecard.firstShot(6);
      bowlingScorecard.secondShot(4);
      expect(bowlingScorecard.spare).toBe(true);
      bowlingScorecard.firstShot(6);
      bowlingScorecard.secondShot(4);
      expect(bowlingScorecard.spare).toBe(true);
    });

    it('can tell if it is NOT a spare', function() {
      bowlingScorecard.firstShot(5);
      bowlingScorecard.secondShot(4);
      expect(bowlingScorecard.spare).toBe(false);
    });

  });

  describe('frames', function() {

    it('starts on frame number 1', function() {
      expect(bowlingScorecard.currentFrame).toEqual(1);
    });

    it('knows that when it is a strike it should go to the next frame', function() {
      expect(bowlingScorecard.currentFrame).toEqual(1);
      bowlingScorecard.firstShot(10);
      expect(bowlingScorecard.currentFrame).toEqual(2);
    });

    it('knows that after the second shot it should go to the next frame', function() {
      expect(bowlingScorecard.currentFrame).toEqual(1);
      bowlingScorecard.firstShot(2);
      bowlingScorecard.secondShot(5);
      expect(bowlingScorecard.currentFrame).toEqual(2);
    });

  });

  describe('scoring per frame', function() {

    it('knows the score of each frame', function() {
      expect(bowlingScorecard.frameScore).toEqual(0);
      bowlingScorecard.firstShot(2);
      bowlingScorecard.secondShot(4);
      expect(bowlingScorecard.standingPins).toEqual(4);
      expect(bowlingScorecard.frameScore).toEqual(6);
    });

    it ('each strike gets a bonus for the next 2 rolls', function() {
      bowlingScorecard.firstShot(10);
      expect(bowlingScorecard.frameScore).toEqual(10);
      bowlingScorecard.firstShot(4);
      bowlingScorecard.secondShot(4);
      bowlingScorecard.bonus();
      expect(bowlingScorecard.bonusScore).toEqual(8);
    });

  });

  describe('total score tally', function() {

    it('have a running total of the game score', function() {
      expect(bowlingScorecard.totalScore).toEqual(0);
      expect(bowlingScorecard.frameScore).toEqual(0);
      expect(bowlingScorecard.currentFrame).toEqual(1);
      bowlingScorecard.firstShot(10);
      expect(bowlingScorecard.currentFrame).toEqual(2);
      expect(bowlingScorecard.frameScore).toEqual(10);
      bowlingScorecard.updateTotalScore();
      expect(bowlingScorecard.totalScore).toEqual(10);
      bowlingScorecard.firstShot(10);
      expect(bowlingScorecard.frameScore).toEqual(10);
      bowlingScorecard.updateTotalScore();
      expect(bowlingScorecard.totalScore).toEqual(20);
      bowlingScorecard.firstShot(10);
      bowlingScorecard.updateTotalScore();
      expect(bowlingScorecard.totalScore).toEqual(30);
    });

  });

});















