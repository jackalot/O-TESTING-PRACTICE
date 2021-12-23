function getAverage(inputArray) {
    let tempSum = 0;
    for(let i = 0; i < inputArray.length; i++)
    {
        tempSum += inputArray[i];
    }
    const average = tempSum / inputArray.length;
    return average;
}
function getMinimum(inputArray) {
    let tempMin = 100;
    for(let i = 0; i < inputArray.length; i++)
    {
        if(inputArray[i] <= tempMin)
        {
            tempMin = inputArray[i];
        }
    }
    return tempMin;
}
function getMaximum(inputArray) {
    let tempMax = 0;
    for(let i = 0; i < inputArray.length; i++)
    {
        if(tempMax <= inputArray[i])
        {
            tempMax = inputArray[i];
        }
    }
    return tempMax;
}
function analyzeArray(inputArray) {
const average = getAverage(inputArray);
const min = getMinimum(inputArray);
const max = getMaximum(inputArray);
const length = inputArray.length;
return { average: average, min: min, max: max, length: length};
}
module.exports = analyzeArray;