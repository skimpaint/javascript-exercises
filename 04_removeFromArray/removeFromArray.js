const removeFromArray = function(arr, ...removeThis) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let arrMatch = 0;
        for (let j = 0; j < removeThis.length; j++) {
            if (arr[i] === removeThis[j]) {
                arrMatch++;
                break;
            }
        }
        if (arrMatch === 0) {
            newArr.push(arr[i]);
        }
    };
    return newArr;
};

//console.log(removeFromArray([1,2,3,4,3,8,48], 2, 3))
// Do not edit below this line
module.exports = removeFromArray;
