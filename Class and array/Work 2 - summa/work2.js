function getFirstLetters(text){
    const textArr = text.split('');
    const firstLetters = textArr.filter((letter, i) => {
        if(!i || textArr[i - 1] === ' '){
            return true;
        }
    });

    console.log(firstLetters);
}

getFirstLetters('Упал я в лужу и лежал я в ней');