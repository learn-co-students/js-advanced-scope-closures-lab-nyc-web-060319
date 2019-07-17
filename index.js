function produceDrivingRange(range){
    return function(startLoc, endLoc){
  
      let start = parseInt(startLoc);
      let end = parseInt(endLoc);
      let distance = Math.abs(end - start);
      let difference = range - distance;
  
      if( difference > 0){
        return `within range by ${difference}`
      } else {
        return `${Math.abs(difference)} blocks out of range`
      }
    }
  }
  
  function produceTipCalculator(percentage){
    return function(fare){
      return fare*percentage;
    }
  }
  
  function createDriver(){
    let driverId = 0
    return class {
      constructor(name){
        this.id = ++driverId
        this.name = name
      }
    }
  }