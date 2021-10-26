// num1 dan num2 dinamis
// run kode dengan ketik node [nama file] [num1] [num2]
// ex nama file 030_RasyidIbrahimFattah
// node 030_RasyidIbrahimFattah 10 2


console.log('----------------')
let num1 = Number(process.argv.slice(2,3))
let num2 = Number(process.argv.slice(3))

let sum = num1 + num2
let difference = num1 - num2 
let product = num1 * num2 
let quotient = num1 / num2 
let remainder = num1 % num2 

console.log('Sum :', sum)
console.log('Difference :', difference)
console.log('Product :', product)
console.log('Quotient :', quotient)
console.log('Remainder :', remainder)
console.log('Value of num1 after increment :', num1 + 1)
console.log('Value of num2 after decrement :', num2 - 1)
