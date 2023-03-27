function highestLetter(string) { //Retornand Undefined (erro em algo ;o)
    const sortedArray = string.toLowerCase().split('').sort()
    return sortedArray[sortedArray.lenght - 1]
}

console.log(highestLetter('undefined your beach'))