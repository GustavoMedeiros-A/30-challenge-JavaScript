function compareCounts(count, index, array) {
    return index !== 0 ? count === array[index - 1] : true
}

function checkBalance(currentLetter) {
    const charCount = {}

    for (let i = 0; i < currentLetter.length; i++) {
        const currentLetter = currentLetter[i]
        charCount[currentLetter] = charCount[currentLetter] ? charCount[currentLetter] + 1 : 1
    }

    return Object.values(charCount).every(compareCounts)
}
// Object.values = acessa todos os valores de um objeto
// Metodo Every = Verifica se todos os elementos do array vao atender a certa condição
// Every => pega todas as quantidade dos valores se ve se as quantidades são igual

console.log(checkBalance('This is Thee'))
console.log(checkBalance('ssd'))
console.log(checkBalance('Lorem Ipsum'))
console.log(checkBalance("QQwweerrttyy"))