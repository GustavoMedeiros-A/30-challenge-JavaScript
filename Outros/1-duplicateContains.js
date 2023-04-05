var duplicateContains = (num) => {

    for (let right = 0; right < num.length; right++) {
        for (let left = 0; left < right; left++) {
            const isDuplicate = num[left] === num[right];          
            if(isDuplicate) return true;
        }
    }
    return false
}

console.log(duplicateContains([1,2,3,1]))
console.log(containsDuplicate([1,2,3,1]))