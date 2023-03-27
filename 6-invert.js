
function invertWord(word) {
    return word.split('').reverse().join('')
}

function invert(string) {
    return string.toLowerCase().split(' ').map(invertWord).join(' ')
}

console.log(invert("This is a apple"))
console.log(invert("May the force be with you"))