const leapYears = function (year) {
    let leap = false
    if (year > -1) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                leap = true
            } else {
                leap = false
            }
        } else {
            if (year % 4 === 0) {
                leap = true
            }
        }
    }
    return leap
};

// Do not edit below this line
module.exports = leapYears;
