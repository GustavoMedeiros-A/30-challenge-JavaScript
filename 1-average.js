
function avarage(numbers) {
    return numbers.reduce((accum, num) => accum + num,0) / numbers.length
}

function avarageBig(numbers) {
    let sum = 0
    numbers.forEach(number => {
        sum += number
    })

    const avg = sum / numbers.length

    return avg

}

console.log(avarage([10,10,10]))
console.log(avarage([10,10,9]))

console.log(avarageBig([5,3]))


