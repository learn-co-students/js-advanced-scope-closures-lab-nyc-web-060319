// produceDrivingRange(10) returns a function that will take
//  two strings as arguments and returns a message stating whether the trip is in range. 
// If foo = produceDrivingRange(10), then foo('12th', '15th') would return 
// "within range by 7" and foo('12th', '30th') would return "8 blocks out of range". 


function produceDrivingRange(rangeNum){

    return function blah (ptA, ptB){
        const distance = Math.abs(parseInt(ptA) - parseInt(ptB))
        const travelDis = Math.abs(distance - rangeNum)
        console.log ("dist:  ", distance)
        if (distance < rangeNum) {
            return `within range by ${travelDis}`
        } else {
            return `${travelDis} blocks out of range`
        }
    }

}

function produceTipCalculator(pct){
    return function blah(billTotal) {
        let tip = billTotal * pct
        return tip
    }
}

    // returns a class that allows us to create a driver with a name attribute 

function createDriverNOPE(name){
    let counter = 0;
    let person = {};
    person.name = name;  // This works, but Person is a hash.. 
    person.id = counter;
    //     name: name,
    //     id: counter
    // };

    n = Object.create(person);
    counter++;
    return n;
    // return function blah(name) {
    //     n = Object.create(person);
    //     counter++;
    //     return n;
    // }
}


function createDriver(name){
    let counter = 0;
    return function blah(name) {
        let person = {};
        person.name = name;  // This works, but Person is a hash.. 
        person.id = counter;

        let n = Object.create(person);
        counter++;
        return n;
    }
}