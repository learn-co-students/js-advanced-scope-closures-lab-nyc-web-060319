function produceDrivingRange(distance) {
  return function(start, end) {
    const trip = Math.abs(parseInt(start.slice(0,2)) - parseInt(end.slice(0,2)))
    const result = distance - trip
    if (result > 0)
      {return "within range by " + result}
    else if (result < 0)
    {return Math.abs(result) + " blocks out of range"}
  }
}

function produceTipCalculator(num) {
  return function(fare) {
    return num * fare
  }
}



function createDriver() {
  let driverId = 0
  return function(nameVal) {
    return {name: nameVal, id: driverId++ }
  }
}

//console.log(createDriver())
