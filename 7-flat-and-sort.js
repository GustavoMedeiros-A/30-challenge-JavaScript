function flatAndSort(array) {
    const newArray = []

    array.forEach(number => {
        newArray.push(...number) //desestrutura a lista (...) ai ''tira'' os arrays
    })

    return newArray.sort((a, b) => a - b) //pega os dois elementos, se o valor de callback é positivo, o A é maior do que B se for 
    // negativo, vai entender que B é maior do que A, e assim ele vai organizando a lista.
    
}




console.log(flatAndSort([[1, 5, 3], [6, 19, 11], [47, 128, 5], [1, 93, 57, 42, 103]]))