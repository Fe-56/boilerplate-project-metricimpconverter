const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  test('correctly read a whole number input', () => {
    assert.equal(convertHandler.getNum("12km"), 12, "convertHandler should correctly read a whole number input");
  });

  test('correctly read a decimal number input', () => {
    assert.equal(convertHandler.getNum("12.4km"), 12.4, "convertHandler should correctly read a decimal number input");
  });

  test('correctly read a fractional input', () => {
    assert.equal(convertHandler.getNum("12/3km"), 4, "convertHandler should correctly read a fractional input");
  });

  test('correctly read a fractional input with a decimal', () => {
    assert.equal(convertHandler.getNum("12.3/4km"), 3.075, "convertHandler should correctly read a fractional input with a decimal");
  });

  test('correctly return an error on a double-fraction', () => {
    assert.isNull(convertHandler.getNum("3/2/3km"), "convertHandler should correctly return an error on a double-fraction");
  });

  test('correctly default to a numerical input of 1 when no numerical input is provided', () => {
    assert.equal(convertHandler.getNum("km"), 1, "convertHandler should correctly default to a numerical input of 1 when no numerical input is provided");
  });

  test('correctly read each valid input unit - gal', () => {
    assert.equal(convertHandler.getUnit("2gal"), "gal", "convertHandler should correctly read each valid input unit - gal");
  });

  test('correctly read each valid input unit - L', () => {
    assert.equal(convertHandler.getUnit("2L"), "L", "convertHandler should correctly read each valid input unit - L");
  });

  test('correctly read each valid input unit - lbs', () => {
    assert.equal(convertHandler.getUnit("2lbs"), "lbs", "convertHandler should correctly read each valid input unit - lbs");
  });

  test('correctly read each valid input unit - kg', () => {
    assert.equal(convertHandler.getUnit("2kg"), "kg", "convertHandler should correctly read each valid input unit - kg");
  });

  test('correctly read each valid input unit - mi', () => {
    assert.equal(convertHandler.getUnit("2mi"), "mi", "convertHandler should correctly read each valid input unit - mi");
  });

  test('correctly read each valid input unit - km', () => {
    assert.equal(convertHandler.getUnit("2km"), "km", "convertHandler should correctly read each valid input unit - km");
  });

  test('correctly return an error for an invalid input unit', () => {
    assert.isNull(convertHandler.getReturnUnit("m"), "convertHandler should correctly return an error for an invalid input unit");
  });

  test('return the correct return unit for each valid input unit - gal', () => {
    assert.equal(convertHandler.getReturnUnit("gal"), "L", "convertHandler should return the correct return unit for each valid input unit - gal");
  });

  test('return the correct return unit for each valid input unit - L', () => {
    assert.equal(convertHandler.getReturnUnit("l"), "gal", "convertHandler should return the correct return unit for each valid input unit - L");
  });

  test('return the correct return unit for each valid input unit - lbs', () => {
    assert.equal(convertHandler.getReturnUnit("lbs"), "kg", "convertHandler should return the correct return unit for each valid input unit - lbs");
  });

  test('return the correct return unit for each valid input unit - kg', () => {
    assert.equal(convertHandler.getReturnUnit("kg"), "lbs", "convertHandler should return the correct return unit for each valid input unit - kg");
  });

  test('return the correct return unit for each valid input unit - mi', () => {
    assert.equal(convertHandler.getReturnUnit("mi"), "km", "convertHandler should return the correct return unit for each valid input unit - mi");
  });

  test('return the correct return unit for each valid input unit - km', () => {
    assert.equal(convertHandler.getReturnUnit("km"), "mi", "convertHandler should return the correct return unit for each valid input unit - km");
  });

  test('correctly return the spelled-out string unit for each valid input unit - gal', () => {
    assert.equal(convertHandler.spellOutUnit("gal"), "gallons", "convertHandler should correctly return the spelled-out string unit for each valid input unit - gal");
  });

  test('correctly return the spelled-out string unit for each valid input unit - L', () => {
    assert.equal(convertHandler.spellOutUnit("L"), "liters", "convertHandler should correctly return the spelled-out string unit for each valid input unit - L");
  });

  test('correctly return the spelled-out string unit for each valid input unit - lbs', () => {
    assert.equal(convertHandler.spellOutUnit("lbs"), "pounds", "convertHandler should correctly return the spelled-out string unit for each valid input unit - lbs");
  });

  test('correctly return the spelled-out string unit for each valid input unit - kg', () => {
    assert.equal(convertHandler.spellOutUnit("kg"), "kilograms", "convertHandler should correctly return the spelled-out string unit for each valid input unit - kg");
  });

  test('correctly return the spelled-out string unit for each valid input unit - mi', () => {
    assert.equal(convertHandler.spellOutUnit("mi"), "miles", "convertHandler should correctly return the spelled-out string unit for each valid input unit - mi");
  });

  test('correctly return the spelled-out string unit for each valid input unit - km', () => {
    assert.equal(convertHandler.spellOutUnit("km"), "kilometers", "convertHandler should correctly return the spelled-out string unit for each valid input unit - km");
  });
});