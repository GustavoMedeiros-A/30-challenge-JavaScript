var isAnagram = (s,t) => {
    const isEqual = s.length === t.length;
    if(!isEqual) return false;

    return reorder(s) === reorder(t);
    
 };

const reorder = (string) => string.split('').sort((a, b) => a.localeCompare(b)).join('');

 
// const reorder = (string) => string.split('').sort((a, b) => a.localeCompare(b)).join('')

 console.log(isAnagram("anagram", "nagaram"))
 console.log(isAnagram("rat", "car"))