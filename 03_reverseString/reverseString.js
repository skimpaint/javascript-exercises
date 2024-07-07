const reverseString = function(string) {
    reverseStringBuffer = '';
    for (let i = 0; i < string.length; i++) {
        reverseStringBuffer += string[string.length - 1 - i];
    };
    return reverseStringBuffer;
};

// Do not edit below this line
module.exports = reverseString;
