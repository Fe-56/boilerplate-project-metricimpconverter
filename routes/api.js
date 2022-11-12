'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', (req, res) => {
    let result;
    let input = req.query.input;
    let magnitude = convertHandler.getNum(input);
    let unit = convertHandler.getUnit(input);
    let returnMagnitude;
    let returnUnit;
    let invalidInput = false;
    
    if (magnitude == null){
      result = {
        string: 'invalid number'
      };
      invalidInput = true;
    }
    
    if (unit == null){
      if (invalidInput){
        result = 'invalid number and unit';
      }
      else{
        result = 'invalid unit';
      }
      
      invalidInput = true;
    }
    else{
      returnUnit = convertHandler.getReturnUnit(unit);
      
      if (returnUnit == null){
        if (invalidInput){
          result = 'invalid number and unit';
        }
        else{
          result = 'invalid unit';
        }
        
        invalidInput = true;
      }
    }

    if (!invalidInput){
      returnMagnitude = convertHandler.convert(magnitude, unit);
      result = {
        initNum: magnitude,
        initUnit: unit.toLowerCase() === "l" ? "L" : unit.toLowerCase(),
        returnNum: returnMagnitude,
        returnUnit: returnUnit,
        string: convertHandler.getString(magnitude, unit, returnMagnitude, returnUnit)
      };
    }
    
    res.status(200).send(result);
  });
};
