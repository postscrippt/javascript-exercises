const removeFromArray = function (arr, ...x) {
    let removed = arr.filter(item => !x.includes(item)) //returns item if the unwanted is not included in the item

    return removed
};

// Do not edit below this line
module.exports = removeFromArray;
