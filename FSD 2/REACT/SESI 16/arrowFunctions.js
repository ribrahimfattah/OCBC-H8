const sum = (a, b) => a + b

console.log(sum(1,45))

// () => () => {} -> currying

const anotherCurryFunction = (a, b) => (c, d) => (a + b) - (c + d)

console.log(anotherCurryFunction(3,5)(5,6))