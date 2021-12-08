function countVowelLetters(str, vowels = 'aeёиоуыэюя'){
    return str
    .toLowerCase()
    .split('')
    .filter((letter) => vowels.includes(letter));
}

const vowels = countVowelLetters('доброе утро страна!');
console.log(vowels);
console.log(vowels.length);