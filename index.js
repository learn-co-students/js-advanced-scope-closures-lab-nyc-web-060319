function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let start = parseInt(startBlock)
    let end = parseInt(endBlock)
    let distanceTraveled = Math.abs(end - start)
    let difference = blockRange - distanceTraveled

    if (difference > 0) {
      return `within range by ${difference}`
    }
    else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(rideFare) {
    return rideFare * percentage
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}

// function createDriver() {
//   let driverId = 0
//   return class {
//     constructor( name ) {
//       this.id = ++driverId
//       this.name = name
//     }
//   }
// }
