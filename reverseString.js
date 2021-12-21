function reverseString(str)
{
    let reverse = [];
    for(let i = str.length; i > -1; i--)
    {
        const char = str[i];
        reverse.push(char);
    }
    return reverse.join("");
}
module.exports = reverseString;