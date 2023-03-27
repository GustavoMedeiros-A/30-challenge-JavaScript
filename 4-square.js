function squareDigits(value) {
    let valueString = value.toString()
    let result = ""
    for(let i = 0; i < valueString.length; i++) {
        result += Math.pow(valueString[i], 2).toString()
    }
    return Number(result)
}

function squareDigitsLowCode(number) {
    const digitsArray = number.toString().split('')
    return Number(digitsArray.map(number => number ** 2).join(''))
}



console.log(squareDigits(3514))
console.log(squareDigits(94571))
console.log(squareDigits(24))
console.log(squareDigits(745821698))



console.log(squareDigitsLowCode(3514))
console.log(squareDigitsLowCode(94571))
console.log(squareDigitsLowCode(24))
console.log(squareDigitsLowCode(745821698))