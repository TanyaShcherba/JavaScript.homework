function quadraticEquation(){
    const equationA = prompt(`Введите a`, 0);
    const equationB = prompt(`Введите b`, 0);
    const equationC = prompt(`Введите c`, 0);

    const quadraticEquation = Math.sqrt(equationB * equationB - 4 * equationA * equationC);

    const denom = 2 * equationA;

    if (quadraticEquation > 0) {
        const resultX1 = (-equationB + quadraticEquation / denom);
        const resultX2 = (-equationB - quadraticEquation / denom);
        console.log(`quadraticEquation(${equationA}, ${equationB}, ${equationC})
        Результат:
        уравнение (${equationA}x^2)-(${equationB}x)+(${equationC}) = 0 имеет корни X1=${resultX1} и X2=${resultX2}`)
    }

    if(quadraticEquation === 0) {
        const resultX1 = (-equationB / denom);
        console.log(`quadraticEquation(${equationA}, ${equationB}, ${equationC})
        Результат:
        уравнение (${equationA}x^2)-(${equationB}x)+(${equationC}) = 0 имеет один корень X1=${resultX1}`)
    }

    else {
        console.log(`quadraticEquation(${equationA}, ${equationB}, ${equationC})
        Результат:
        уравнение (${equationA}x^2)-(${equationB}x)+(${equationC}) = 0 не имеет вещественных корней`)
    }
}

quadraticEquation();