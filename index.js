const returnFirstTwoDrivers = function (thing1){
    return thing1.slice(0,2)

}

const returnLastTwoDrivers = (thing1) => {
    return thing1.slice(-2)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]



const createFareMultiplier = (num) => {
    return (fare) => num * fare

}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(anyDrivers, cb) {
    return cb(anyDrivers)
}