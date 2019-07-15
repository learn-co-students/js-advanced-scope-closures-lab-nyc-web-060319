function produceDrivingRange(range){
    return function(block1, block2){
        let start = parseInt(block1)
        let end = parseInt(block2)
        let distance = Math.abs( end - start );
        let difference =  range - distance ;

        if (difference > 0){
            return `within range by ${difference}`
        } else {
            return `${Math.abs(difference)} blocks out of range`
        }
    }

}

function produceTipCalculator(tip){
    return function produceDrivingRange(fare){
        return fare * tip;
    };
}

function createDriver(){
    let driverId = 0
  return class {
    constructor( name ) {
      this.id = ++driverId
      this.name = name
    }
  }
}