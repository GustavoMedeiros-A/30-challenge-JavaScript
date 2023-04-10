function possiblePasswords(array) {
    if(array.length === 0){
        return [[]]
    }

    const removedChar = array[0]
    const partialChars = array.slice(1) //Corta um pedaço do array, nesse caso, da posição 1 até o fim

    const partialPossibilities = possiblePasswords(partialChars)

    const allPossibilities = [] 

    partialPossibilities.forEach(partialPossibility => {
        for (let i = 0; i <= partialPossibility.length; i++) { 
            const completePossibility = [...partialPossibility.slice(0, i), removedChar, ...partialPossibility.slice(i)]           
            allPossibilities.push(completePossibility) 
        }
    })
    return allPossibilities

}

console.log(possiblePasswords(["x", "s", "-", "#"]))
console.log(possiblePasswords(["1", "2", "3"]))
console.log(possiblePasswords([]))
console.log(possiblePasswords(["a", "7", "c", "4", "@"]))