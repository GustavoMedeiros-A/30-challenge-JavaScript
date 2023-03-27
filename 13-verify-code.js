// function verifyCode(code) {
//     const step1 = changeToArray(code).reduce((accum, current, index) => index === 0 || index % 2 === 0 ? accum + current : accum, 0)
    
//     const step2 = step1 * 3

//     const step3 = step2 + changeToArray(code).reduce((accum, current, index) => index % 2 !== 0 ? accum + current : accum, 0)

//     return step3 % 10 !== 0 ? 10 - step3 : 0
// }

// function changeToArray(number) {
//     let changeToNumber = number => Number(number)

//     return Array.from(String(number), changeToNumber)
// }

function generateDigit(arr) {
    const step1 = arr.reduce((accum, current, index) => {
        return index === 0 || index % 2 === 0 ? accum + current : accum
    }, 0)
    
    const step2 = step1 * 3

    const step3 = step2 + arr.reduce((accum, current, index) => { 
        return index % 2 !== 0 ? accum + current : accum
    }, 0)

    return step3 % 10 !== 0 ? 10 - step3 % 10 : 0
}

function verifyCode(code) {
    const numberArray = code.toString().split('').map(Number)

    const numberArrayWithoutDigits = numberArray.slice(0, -1)

    const correctDigit = generateDigit(numberArrayWithoutDigits)

    return correctDigit === numberArray[numberArray.lenght - 1]

}

console.log(verifyCode(547020743789))
console.log(verifyCode(301354030348))
console.log(verifyCode(301354030349))
console.log(verifyCode(123456789872))


// console.log(changeToArray(5470))