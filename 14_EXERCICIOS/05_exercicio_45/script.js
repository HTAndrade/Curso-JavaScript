const nickName = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(nickName.test("htandrade"))
console.log(nickName.test("ht"))
console.log(nickName.test("htandrade123"))
console.log(nickName.test("htandrade_-"))
console.log(nickName.test("htandrade_123"))
console.log(nickName.test("htandradeeeeeeeeeeeeeeeeeeeee"))