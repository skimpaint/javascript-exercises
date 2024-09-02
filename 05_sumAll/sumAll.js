const sumAll = function(big, smoll) {
    if (!Number.isInteger(big) || !Number.isInteger(smoll)) return "ERROR";
    if (big < 0 || smoll < 0) return "ERROR";
    if (big < smoll) {
        const buffer = big;
        big = smoll;
        smoll = buffer;
    }

    let sum = 0;
    for (let i = smoll;  i <= big; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
