function compress(text){
    const letters = text.split('');

    let counter = 0;
    const compressed = letters.reduce((previousValue, currentValue, i) => {
        if(currentValue === letters[i + 1]) {
            ++counter;
            return previousValue;
        }

        if(currentValue !== letters[i + 1]) {
            ++counter;
            previousValue += currentValue+(counter > 1 ? counter : '');
            counter = 0;
            return previousValue;
        }
    }, '');

    console.log(compressed);
}

function uncompress(text) {
    const uncompressed = text.split('').reduce((previousValue, currentValue, i, list) => {
        if(+currentValue){
            for(let j=1; j< +currentValue; j++){
                previousValue += list[i - 1];
            }
        } else{
            previousValue += currentValue;
        }
        return previousValue;
    }, '');

    console.log(uncompressed);
}

compress(`a`);
compress(`aaa`);
compress(`aabbb`);
compress(`aaabcc`);

uncompress(`a`);
uncompress(`a5`);
uncompress(`a2b3`);
uncompress(`a2b1c3`);