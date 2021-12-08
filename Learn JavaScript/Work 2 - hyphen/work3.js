/* Задание 2 fizzBuzz*/
function fizzBuzz(){
    for (let number = 1; number <= 101; ++number){
        console.log((number % 3 === 0 && 'Fizz' || '') + (number % 5 === 0 && 'Buzz' || '') || number);
    }
}
console.log(fizzBuzz());