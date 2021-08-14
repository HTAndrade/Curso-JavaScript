const testId = /[0-9 + ID]/

console.log(testId.test("12345ID")) // true 
console.log(testId.test("12345id")) // true
console.log(testId.test("ID")) // true
console.log(testId.test("12345")) // true
console.log(testId.test("id")) // false
console.log(testId.test("dasdasID")) // true

const testId2 = /\d+ID\b/;

console.log(testId2.test("12345ID")) // true 
console.log(testId2.test("12345id")) // false
console.log(testId2.test("ID")) // false
console.log(testId2.test("12345")) // false
console.log(testId2.test("id")) // false
console.log(testId2.test("dasdasID")) // false
