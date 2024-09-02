const removeFromArray = function(arr, ...removeThis) {
    let newArr = [];
    arr.forEach((item) => {
        if (!removeThis.includes(item)) {
            newArr.push(item);
        }
    });
    return newArr;
}

//console.log(removeFromArray([1,2,3,4,3,8,48], 2, 3))
//...after looking at the solutions, I think I should really start learning built in methods...

// Do not edit below this line
module.exports = removeFromArray;
