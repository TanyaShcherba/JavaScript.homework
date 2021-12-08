function currentSums(arr){
    const newArr = arr.reduce((previousValue, currentValue, i) => {
        if(i === 0) {
            previousValue[0].push(`${currentValue}`);
            previousValue[1].push(currentValue);
        } else {
            previousValue[0].push(`${previousValue[0][i - 1]} - ${currentValue}`);
            previousValue[1].push(currentValue + previousValue[1][i - 1]);
        }

        return previousValue;
    }, [[], []]);

    console.log(newArr);
}

currentSums([2, 3, 5, 7, 11, 13, 17]);