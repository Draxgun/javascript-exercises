const palindromes = function (str) {
    str = str.toLowerCase()
    str = str.replace(/[^a-zA-Z]/g,"");
    let splitString = str.split("");
    let reverseStrArray = splitString.reverse();
    let reverseStr = reverseStrArray.join("");
    if (str===reverseStr) 
    {
        return true 
    }else{
        return false
    }
};


console.log(palindromes('A car, a man, a maraca'))


// Do not edit below this line
module.exports = palindromes;

