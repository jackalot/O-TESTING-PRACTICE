const calculator = require("./calculator");
test('adds 2 + 2 and returns 4', ()=> {
    expect(calculator.add(2, 2)).toBe(4);
})
test('adds 3 + 5 and returns 8', ()=> {
    expect(calculator.add(3, 5)).toBe(8);
})
test('subtracts 9 - 3 and returns 6', ()=> {
    expect(calculator.subtract(9, 3)).toBe(6);
})
test('multiply 3 * 5 and returns 15', () => {
    expect(calculator.multiply(3, 5)).toBe(15);
})
test('divide 15 / 5 and returns 3', () => {
    expect(calculator.multiply(15, 5)).toBe(3);
})