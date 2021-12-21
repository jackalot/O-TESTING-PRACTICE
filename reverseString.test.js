const reverseString = require("./reverseString");
test('If "taco" returns as "ocat"', ()=> {
    expect(reverseString("taco")).toBe("ocat");
})