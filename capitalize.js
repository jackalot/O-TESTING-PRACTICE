function capitalize (str) {
    const firstChar = str[0];
    const capital = firstChar.toUpperCase();
    const restOfString = str.slice(1); 
    const finalString = capital + restOfString;
return finalString;
}
module.exports = capitalize;