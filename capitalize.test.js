const { TestWatcher } = require("jest");
const capitalize = require("./capitalize");

test('returns the word "taco" capitalized to "Taco"', () => {
    expect(capitalize("taco")).toBe("Taco");
})