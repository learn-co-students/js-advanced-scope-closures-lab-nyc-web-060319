// - `produceDrivingRange()` - Calculates whether a
//   given trip is within range.  For example, `produceDrivingRange(10)` returns a
//   function that will take two strings as arguments and returns a message stating
//   whether the trip is in range. 

// If `foo = produceDrivingRange(10)`, then foo('12th', '15th')` would return `"within range by 7"` 
//    trip = 10 blocks, 15-12 = 3, 10 - 3 = 7
            //    trip  >   difference ? -> true -> within 
//    and `foo('12th',
//   '30th')` would return `"8 blocks out of range"`. We recommend referencing the
        // 12 - 30 == -18 -> |-18| = 18 -> 10 > 18 ? -> false -> out of range
//   `test/indexTest.js` for more details.


function produceDrivingRange(blockRange) {
    return function (str1, str2) {
        let str1Num = parseInt(str1.slice(0,-2))
        let str2Num = parseInt(str2.slice(0,-2))
        let difference = Math.abs(str1Num - str2Num)
        if (blockRange > difference) {
            return `within range by ${blockRange - difference}`
        } else {//blockRange < Math.abs
            return `${Math.abs(blockRange -difference)} blocks out of range`
        }
    }
}




// - `produceTipCalculator()` - Returns a function that then calculates a tip. For
//   example, `produceTipCalculator(.10)` returns a function that calculates ten
//   percent tip on a fare. `produceTipCalculator(.20)` returns a function that
//   calculates twenty percent tip on a fare.


function produceTipCalculator (percentage) {
    return function (fare) {
        return percentage * fare
    }
}

//ex. let tenPercent = produceTipCalculator(0.10) --> returns inner function def, percentage saved as 0.10
// tenPercent(50) = runs inner function with 50 as fare --> return 50 * 0.10 = 5




// - `createDriver` is a function that returns a `Driver` class. The class has
//   reference to a `driverId` that is incremented each time a new driver is created.
//   The rest of the code base does not have access to `driverId`.

function createDriver ()  {
    let driverId = 0;
    
    return class {  //how does class fit 
        constructor(name) {
            this.name = name
            this.id = ++driverId
        }
    }
}

// this will return an inner function  inside class (takes no args).
// The inner function is named constructor.
//When calling const Driver = createDriver(), assigning it means this is the first time createDriver() is ever called
// The return value of Driver with no args, it's just the inner function (constructor) definition BUT driverId has been assigned to 0
//Now if we set a variable: let james = new Driver("James") we run the inner(contr) fxn with James as arg...
// this(instance of Driver).name = James, this.id = (driverId (currently 0) = driverId + 1) 
//                                                      /\ This not only gives the inst an id of 1 but perm increases driverId by 1 outside of scope
//...we get james => {name: James, id:1}
const Driver = createDriver()
//let james = new Driver(James) = createDriver("James")