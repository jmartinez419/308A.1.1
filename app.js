let initialNumber = 0

try {
    increamentCounter()
} catch (error) {
    console.log(error)
    console.log(initialNumber)
}

function increamentCounter (){
    initialNumber++
    increamentCounter()
}

function arrFlatten (arr) {
    let newArr = [];
    recursion (0, arr, newArr);
    return newArr
}

function recursion (index, arr, newArr) {
    if (index >= arr.length) return;

    if (Array.isArray(arr[index])) {
        recursion(0, arr[index], newArr);
    } else{
        newArr.push(arr[index]);
    }

    recursion (index + 1, arr, newArr);
}

flatArray = [1,2,3,4,[5],6,7,[8,[9]]]

console.log(flatArray)

let trampoline = (recursion,...args) => {
    let result = recursion(...args)
    while (typeof result === 'function') {
        result = result()
    }
    return result;
}

console.log(trampoline(arrFlatten, flatArray))

let number = document.querySelector(".number")

function checkprimeNumber (num) {

    for(i = 2; i <= num; i++){
        if (num % 2 === 0) return false;
    }
}
