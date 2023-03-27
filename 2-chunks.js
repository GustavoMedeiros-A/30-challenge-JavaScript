// function recursiveChunks(number) {
//     if (number === 0){
//         return ""
//     }
//     if (number === 1) {
//         return "Chunk"
//     } else {
//         return 'chunk-' + recursiveChunks(number-1)
//     }
// }

// function recursiveChunks(number){
//     if(number ===0) return ""
//     return number === 1 ? "chunk" : "chunk-" + recursiveChunks(number-1)
// }


console.log(recursiveChunks(3))
console.log(recursiveChunks(5))