function reverse(array) { //Retornando undefined no primeiro valor
    const arrayReverse = []
    for(var i = array.length; i >= 0; i--) {
        arrayReverse.push(array[i])
    }
    return arrayReverse
}

function reverseJs(array) {
    const arrayReverse = []
    for (let i = 0; i < array.length; i++) {
        arrayReverse[i] = array[array.length - 1 - i]
    }

    return arrayReverse
}


console.log(reverse([3, 4, 6, 8, 10]))
console.log(reverse(['mario', 'am', 'i']))

console.log(reverseJs(['mario', 'am', 'i']))
console.log(reverseJs([3, 4, 6, 8, 10]))
