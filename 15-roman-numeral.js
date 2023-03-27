function sumValuesRomans(accum, current, index, array) {
    
    return current < array[index + 1 ] ? accum - current : accum + current;7
    // Se o current for menor que o array [index + 1], diminui, se não, soma.
}
function romanNumeral(string) {
    let stringSplit = string.split('')

    const romanDecimalMap = {
        "I" : 1, 
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    const decimalsArray = stringSplit.map(numeral => romanDecimalMap[numeral])    

    return decimalsArray.reduceRight(sumValuesRomans)  // Começa pelo ultimo valor, se ele for maior que o seu sucessor, soma, se não, diminui

}


console.log(romanNumeral("XLVII")) // 47
console.log(romanNumeral("CDXXXVIII")) // 438
console.log(romanNumeral("CMIX")) // 909
console.log(romanNumeral("MMMCMXCIX")) // 3999


// Switch feito antes para caso de duvida

    // const decimalsArray = stringSplit.map(numeral => {
    //     switch (numeral) {
    //         case "I":
    //             return 1
    //         case "V":
    //             return 5
    //         case "X":
    //             return 10
    //         case "L": 
    //             return 50
    //         case "C":
    //             return 100
    //         case "D": 
    //             return 500
    //         case "M":
    //             return 1000
    //         default:
    //             return 0
    //     }
    // })