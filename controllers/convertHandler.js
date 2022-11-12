function ConvertHandler() {
  this.isCorrectInputFormat = function(input){ // ensures the input only contains numbers, alphabets, decimal places and the division operator
    return /^\d+(\.\d+)?(\/)+\d+(\.\d+)?[a-zA-Z]+$|^\d+(\.\d+)?[a-zA-Z]+$/.test(input);
  }
  
  this.getNum = function(input) {
    let result;
    
    if (this.isCorrectInputFormat(input)){
      result = input.match(/[+-]?\d+(\.\d+)?/g);

      if (result.length === 2){
        result = Number(result[0])/Number(result[1]);
      }
      else if (result.length === 1){
        result = Number(result[0]);
      }
    }
    else{
      if (/^[a-zA-Z]+$/.test(input)){
          result = 1;
      }
      else{ // invalid number
        result = null;
      }
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    result = input.match(/[a-zA-Z%]+/g)[0];
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    switch(initUnit.toLowerCase()){
      case 'gal':
        result = 'L';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
        result = null;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    switch(unit.toLowerCase()){
      case 'gal':
        result = 'gallons';
        break;
      case 'l':
        result = 'liters';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      default:
        result = null;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    switch(initUnit.toLowerCase()){
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        return null;
    }
    
    return parseFloat((result).toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    let initUnitString = this.spellOutUnit(initUnit);
    let returnUnitString = this.spellOutUnit(returnUnit);
    result = `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`;
    return result;
  };
}

module.exports = ConvertHandler;
