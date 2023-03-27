function coins(number) {
    let rest = number
    const coins = { '500': 0, '100': 0, '25': 0, '10': 0, '5': 0, '1': 0 }

    coins['500'] = Math.floor(rest / 500)
    rest = rest - 500 * Math.floor(rest/500)

    coins['100'] = Math.floor(rest / 100)
    rest = rest - 100 * Math.floor(rest / 100)

    coins['25'] = Math.floor(rest / 25)
    rest = rest - 25 * Math.floor(rest / 25)

    coins['10'] = Math.floor(rest / 10)
    rest = rest - 10 * Math.floor(rest / 10)

    coins['5'] = Math.floor(rest / 5)
    rest = rest - 5 * Math.floor(rest / 5)

    coins['1'] = Math.floor(rest / 1)
    rest = rest - 1 * Math.floor(rest / 1)

    return coins

}



console.log(coins(478))
console.log(coins(384))
console.log(coins(5412))
console.log(coins(50))