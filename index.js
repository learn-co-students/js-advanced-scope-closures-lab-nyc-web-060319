"use strict";
function produceDrivingRange(blockRange) {
    return function(start, end) {
        const startI = parseInt(start);
        const endI = parseInt(end);
        const distance = (endI - startI)
        if ( distance > blockRange) {
            const overDist = distance - blockRange;
            return `${overDist} blocks out of range`;
        }
        const withinDist = blockRange - distance;
        return `within range by ${withinDist}`;
    };
}

function produceTipCalculator(tip) {
    return function(bill) {
        return tip * bill;
    }
}

function createDriver() {
    let driverID = 0;
    return function(nameValue) {
        return {name: nameValue, id: driverID++};
    }
}