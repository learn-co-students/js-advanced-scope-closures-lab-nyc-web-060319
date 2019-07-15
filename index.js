function produceDrivingRange(num){
    return function(firstString, secondString){
        const firstNum = Number.parseInt(firstString.split('t')[0])
        const secondNum = Number.parseInt(secondString.split('t')[0])
        distance = Math.abs(firstNum - secondNum)
        if (distance > num){
            return `${distance - num} blocks out of range`;
        }
        return `within range by ${num - distance}`;
    }
}

function produceTipCalculator(percent) {
    return function(amount){
        return percent * amount;
    }
    
}

function createDriver(){
    let driverID = 0

    return class {
        constructor(name){
            this.name = name
            this.id = ++driverID
        }
    }
}