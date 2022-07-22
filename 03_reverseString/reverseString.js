const reverseString = function(string) {
    let length = string.length
    const letterArray = [];

    for (let i = length; i>0; i--){
        letterArray.push(string[i-1]);
    }
    console.log(letterArray);
    let reversedString = letterArray.join("");
    return reversedString
};


// Do not edit below this line
module.exports = reverseString;
