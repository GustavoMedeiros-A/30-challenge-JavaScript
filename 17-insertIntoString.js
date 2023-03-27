function insertIntoString(string, toInsert, indexes){
    const charString = string.split('')
    let insertCount = 0

    for (let i = 0; i <= string.length; i++) {
        if(indexes.includes(i)) {
            charString.splice(i + insertCount, 0, toInsert)
            insertCount++
        }
        
    }


    return charString.join('')
}


console.log(insertIntoString("capaz utilizar as cápsulas emergência", 'de ', [6, 27, 38]))
console.log(insertIntoString("mas que de frases são essa ", 'caralho ', [4, , 27]))
console.log(insertIntoString("hello", 'world ', [6]))
console.log(insertIntoString("isso é um teste", 'não ', [5]))