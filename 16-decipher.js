function decipher(string, key) {
    const charsArray = string.split('')
    const normalizedKey = key % 26

    const codesArray = charsArray.map(char => {
        const currentCode = char.charCodeAt(0) // Index ASCII

        if(currentCode >= 65 && currentCode <= 90 && currentCode - normalizedKey < 65) { 
            return currentCode + 26
        }
        // Se valor menir ou igual a 65, que é ultimo na ASCII, soma-se 26 para que ele vá até o final e começar de novo

        if(currentCode >= 96 && currentCode <= 122 && currentCode - normalizedKey < 96) {
            return currentCode + 26
        }

        return currentCode

    })

    return codesArray.map(code => String.fromCharCode(code - normalizedKey)).join('')
    


}


console.log(decipher('Vguvg', 2))
console.log(decipher('BCDYZAbcdyza', 27))
console.log(decipher('Qaiik', 60))
console.log(decipher('Amozmlw', 8))