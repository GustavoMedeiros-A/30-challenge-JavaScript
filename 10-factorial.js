function factorial(number) {
    const bigNumber = BigInt(number)
    if(bigNumber === 0n){
        return 1n
    }
    else{
        return bigNumber * factorial(bigNumber - 1n)
    }
}



console.log(factorial(5))
console.log(factorial(0))
console.log(factorial(320))
console.log(factorial(9n))