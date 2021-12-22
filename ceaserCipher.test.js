const ceaserCipher = require('./ceaserCipher');

test('The string "we will attack at dawn" returns "xf xjmm buubdl bu ebxo"', () => {
    expect(ceaserCipher("we will attack at dawn")).toBe("xf xjmm buubdl bu ebxo");
})
test('The string "z" returns "a"', () => {
    expect(ceaserCipher("z")).toBe("a");
})
test('The string "Taco" returns "Ubdp"', () => {
    expect(ceaserCipher("Taco")).toBe("Ubdp");
})
test('The string "can`t" returns "dbo`t"', () => {
    expect(ceaserCipher("can`t")).toBe("dbo`t");
})