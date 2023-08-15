// Remove Blanks
const removeBlanks = (str) => {
    let newStr = "";
    for(let i=0; i<str.length; i++){
        if(str[i] === " "){
            continue;
        }
        else{
            newStr += str[i];
        }
    }
    return newStr;
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

// Get Digits
const getDigits = (str) => {
    let numStr = "";
    for(let i=0; i<str.length; i++){
        if(!isNaN(str[i])){
            numStr += str[i];
        }
    }
    return Number(numStr);
}
console.log(getDigits("abc8c0d1ngd0j0!8"));

// Acronyms
const acronyms = (str) => {
    const rejectRegex = ";.!@#$%^&*()[]{}?/|\\:'\"<>`_=+~"
    let newStr = "";
    let flagGrabLetter = true;
    let flagReject = false;
    for(let i=0; i<str.length; i++){
        if(str[i] === " " || str[i] === "-"){
            if(str[i] === "-"){
                newStr += str[i].toUpperCase();
            }
            flagGrabLetter = true;
            continue;
        }
        for(let j=0; j<rejectRegex.length; j++){
            if(str[i] === rejectRegex[j]){
                flagReject = true;
                break;
            }
        }
        if(flagReject){
            flagReject = false;
            continue;
        }
        if(flagGrabLetter){
            newStr += str[i].toUpperCase();
            flagGrabLetter = false;
        }
    }
    return newStr;
}
console.log(acronyms("there's no free lunch - gotta pay yer way. "));
console.log(acronyms("Live from New York, it's Saturday Night!"));

// Count Non-Spaces
const countNonSpaces = (str) => {
    let counter = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i] !== " "){
            counter++;
        }
    }

    return counter;
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));

// Remove Shorter Strings
const removeAt = (arr, idx) => {
    for(let i=idx+1; i<arr.length; i++){
        arr[i-1] = arr[i];
    }
    arr.pop();
    return arr;
}

const removeShorterStrings = (arr, minLength) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i].length < minLength){
            arr = removeAt(arr, i);
            i--;
        }
    }
    return arr;
}
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'],4));