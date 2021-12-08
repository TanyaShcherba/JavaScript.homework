/* NUMBERS */
function zero(number) {
    if(!number) return function() {return 0};
    return number(0);
}
function one(number) {
    if(!number) return function() {return 1};
    return number(1);
}
function two(number) {
    if(!number) return function() {return 2};
    return number(2);
}
function three(number) {
    if(!number) return function() {return 3};
    return number(3);
}
function four(number) {
    if(!number) return function() {return 4};
    return number(4);
}
function five(number) {
    if(!number) return function() {return 5};
    return number(5);
}
function six(number) {
    if(!number) return function() {return 6};
    return number(6);
}
function seven(number) {
    if(!number) return function() {return 7};
    return number(7);
}
function eight(number) {
    if(!number) return function() {return 8};
    return number(8);
}
function nine(number) {
    if(!number) return function() {return 9};
    return number(9);
}

/* MATH */
function plus(math) {
    return function(mathPlus){
        return mathPlus + math()
    };
}
function minus(math) {
    return function(mathMinus){
        return mathMinus - math()
    };
    
}
function multiply(math) {
    return function(mathMultiply){
        return mathMultiply * math()
    };
    
}
function division(math) {
    return function(mathDivision){
        return mathDivision / math()
    };
    
}

console.log(seven(multiply(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(division(two())));