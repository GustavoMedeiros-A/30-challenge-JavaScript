function quotation(string) {
    const nameSplit = string.split(' ')
    let initials = ''
    for(let i = 0; i < nameSplit.length - 1; i++) {
        initials += `${nameSplit[i][0].toUpperCase()} `
    }
    return `${nameSplit[nameSplit.length - 1].toUpperCase()}, ${initials}`
}



console.log(quotation("Isaac Larrubia Ferreira Pontes"))
console.log(quotation("John Ronald Reuel Tolkien"))
console.log(quotation("christopher james paolini"))