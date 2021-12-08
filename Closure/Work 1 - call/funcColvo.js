function newFunc() {
    let number = 1;
    return function() {
        return number++;
    }
}
let func = newFunc();
console.log(func());
console.log(func());
console.log(func());