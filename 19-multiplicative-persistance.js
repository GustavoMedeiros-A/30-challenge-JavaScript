function multiplicativePersistance(num) {
    if(num < 10) {
        return 0;
    }

    const numSplit = num.toString().split('')
    const product = numSplit.reduce((accum, current) => accum * current, 1)

    console.log("Multiplicando: ", numSplit, "=", product)

    return 1 + multiplicativePersistance(product)

}



console.log(multiplicativePersistance(539))
console.log(multiplicativePersistance(999))
console.log(multiplicativePersistance(7))
console.log(multiplicativePersistance(7169))