const analyzeArray = require ("./analyzeArray");

test('Takes in the array "1,8,3,4,2,6" and returns an object = { average: 4, min: 1, max: 8, length: 6}"', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({ average: 4, min: 1, max: 8, length: 6});
})