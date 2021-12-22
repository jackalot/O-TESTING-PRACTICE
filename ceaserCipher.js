function checkCasing(char) {
    const alphabet = ["a", "b", "c", "d", 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
     'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
     const index = alphabet.indexOf(char.toLowerCase());
     if(index === -1)
     {
         return false; // this means its not a letter
     }
        if(char === char.toUpperCase())
        {
            return true;
        }
        else
        {
            return false;
        }
}
function nextLetter(currentChar, casing)
{
    const alphabet = ["a", "b", "c", "d", 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
     'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
     const index = alphabet.indexOf(currentChar.toLowerCase());
     if(index === -1)
     {
         return currentChar; // this means its not a letter
     }
     else if(currentChar === "z")
     {
         const newChar = "a";
         if(casing === true)
         {
            const capitalNewChar = newChar.toUpperCase();
            return capitalNewChar;
         }
         else
         {
             return newChar;
         }
     }
     else
     {
         const newChar = alphabet.slice(index + 1, index + 2);
         if(casing === true)
         {
            const capitalNewChar = newChar.toUpperCase();
            return capitalNewChar;
         }
         else
         {
             return newChar;
         }
     }
}
function ceaserCipher(inputString) {
    let emptyString = "";
    for(let i = 0; i < inputString.length; i++)
    {
        const casing = checkCasing(inputString[i]);
        const newLetter = nextLetter(inputString[i], casing);
        emptyString += newLetter;
    }
    return emptyString;
}
module.exports = ceaserCipher;