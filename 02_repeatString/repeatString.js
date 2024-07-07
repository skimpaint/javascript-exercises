const repeatString = function(words, times) {
    let repeatBuffer = ""; 
    if (times < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < times; i++) {
        repeatBuffer += words;
    };
    return repeatBuffer;
};

// Do not edit below this line
module.exports = repeatString;
