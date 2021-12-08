/* Задание 2 testEven*/
function testEven() {
    const stringNumber = prompt('Введите число');
    let modifiendString = '';

    for(let i = 0; i < stringNumber.length; i++) {
        if (i + 1 !== stringNumber.length &&
            isNearDigitsEven(stringNumber[i], stringNumber[i + 1])
        ) {
            modifiendString += stringNumber[i] + '-';
        } else {
            modifiendString += stringNumber[i];
        }
    }
        console.log(modifiendString);
}

function isNearDigitsEven(numberOne, numberTwo) {
        return !(numberOne % 2) && !(numberTwo % 2);
}

console.log(testEven());