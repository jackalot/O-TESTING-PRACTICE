function reverseString(str)
{
    const split = str.split();
    const reverse = split.reverse();
    const joined = reverse.join();
    return joined;
}
module.exports = reverseString;