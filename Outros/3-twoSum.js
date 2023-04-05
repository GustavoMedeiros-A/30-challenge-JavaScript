var twoSum = function (num, target) {
    for (let i = 0; i < num.length; i++) {
        const complete = target - num[i];
        for (let next = (i + 1); next < num.length; next++) {
            const number = num[next];

            const isTarget = number === complete
            if(isTarget) return [i, next]
        }
    }
    return [-1, -1]
    
    
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 3], 7))