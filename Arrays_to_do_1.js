// Push Front

const pushFront = (arr, val) => {
    for(let i=arr.length; i>0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = val;
    return arr;
}
console.log(pushFront([5,7,2,3],8));
console.log(pushFront([99],7));

// Pop Front

const popFront = (arr) => {
    firstValue = arr[0];

    for(let i=1; i<arr.length; i++){
        arr[i-1] = arr[i];
    }
    arr.pop();

    console.log(arr);
    return firstValue;
}
console.log(popFront([0,5,10,15]));

// Insert At
const insertAt = (arr, idx, val) => {
    for(let i=arr.length; i>idx; i--){
        arr[i] = arr[i-1];
    }
    arr[idx] = val;
    return arr;
}
console.log(insertAt([100,200,5],2,311));
console.log(insertAt([9,33,7], 1, 42));

// Remove At
const removeAt = (arr, idx) => {
    removedValue = arr[idx];

    for(let i=idx+1; i<arr.length; i++){
        arr[i-1] = arr[i];
    }
    arr.pop();

    console.log(removedValue);
    return arr;
}
console.log(removeAt([1000,3,204,77], 1));

// Swap Pairs
const swapPairs = (arr) => {
    for(let i = 0; i<arr.length; i=i+2){
        if(i+1 >= arr.length){
            return arr;
        }
        const holder = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = holder;
    }
    return arr;
}
console.log(swapPairs([1,2,3,4]));
console.log(swapPairs(["Brendan",true,42]));

// Remove Duplicates
const removeDuplicates = (arr) => {
    let i = 0;
    while(i<arr.length){
        if(i+1 >= arr.length){
            break;
        }
        if(arr[i] === arr[i+1]){
            arr = removeAt(arr, i+1);
        }
        else{
            i++;
        }
    }
    return arr;
}
console.log("RD:", removeDuplicates([-2,-2,3.14,5,5,10]));
console.log("RD:", removeDuplicates([9,19,19,19,19,19,29]));