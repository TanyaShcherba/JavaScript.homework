function changeArray(arr){
    if(arr.length % 2 === 0) {
        const middleElementIndex = arr.length / 2;
        const firstHalf = arr.slice(0, middleElementIndex);
        const secondHalf = arr.slice(middleElementIndex, arr.length);
        console.log(secondHalf.concat(firstHalf));
    } else {
        const middleElementIndex = (arr.length - 1) /2;
        const firstHalf = arr.slice(0, middleElementIndex);
        const secondHalf = arr.slice(middleElementIndex + 1, arr.length);
        console.log(secondHalf.concat(arr[middleElementIndex]).concat(firstHalf))
    }
}

changeArray([1, 2, 3, 4, 5, 6, 7, 8, 9])