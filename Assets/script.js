// Second approach:
// Assignment Code
// WHEN I click the button to generate a password
var generateBtn = document.querySelector("#generate");
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var justNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "*", "^", "%", "$", "@","<",">", "?","+","(",")","+","-","_","="];
const charType = {
    LOWER: "lower",
    UPPER: "upper",
    NUMBERS: "numbers",
    SPECIAL: "special",
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password
}

//Generate a random password based on input from the user
function generatePassword(){
    // This creates a local variable for the password instead of getting the DOM object with id="password"
    let password = '';
    //Prompt the user for length of password and types of chars to include
    var passwordLength = getPasswordLength();   
    var includeLower = confirm("Include lower case letters in your password?");
    var includeUpper = confirm("Include upper case letters in your password?");
    var includeNumbers = confirm("Include numbers in your password?");
    var includeSpecial = confirm("Include special characters in your password?");
    console.log(passwordLength);
    console.log(includeUpper);
    console.log(includeNumbers);
    //create an array of the different char Types to use in the password - this array should never be longer than 4 (lower, upper, numbers, special)
    var charTypesToInclude =  [charType.LOWER];
    if (includeUpper)
        charTypesToInclude.push(charType.UPPER);
    if(includeNumbers)
        charTypesToInclude.push(charType.NUMBERS);
    if (includeSpecial)
        charTypesToInclude.push(charType.SPECIAL);
    //remove lowercase if user chose not to include it - unless they haven't chosen anything else
    if (!includeLower && charTypesToInclude.length > 1) {
        const index = charTypesToInclude.indexOf(charType.LOWER);
        if (index > -1) {
            charTypesToInclude.splice(index, 1);
        }
    }
    //start with a lowercase number since a password will always include lowercase - Note to self: array indices start at 0
    var charTypeIndex = 0;
    for (var i = 0; i < passwordLength; i++) {
        //get a char of the char type at the specified index
        charPick = getPasswordChar(charTypesToInclude[charTypeIndex]);
        console.log(charPick);
        password = password.toString() + charPick.toString();
        console.log(password);
        //increment the charTypeIndex if possible - can't be larger than the array length. Otherwise reset to 0 to start at the beginning
        charTypeIndex++;
        if (charTypeIndex >= charTypesToInclude.length)
            charTypeIndex = 0;
    }
    return password;
}
function getPasswordLength() {
    var ok = false;
    do {
        var passwordLength = prompt("Please choose the number of characters for your password between 8 and 128");
        if (passwordLength < 8 || passwordLength > 128)
            confirm("No, silly - please pick a number between 8 and 128");
        else
            ok = true;
    } while (!ok)
    return passwordLength;
}
function getPasswordChar(cType) {
    var charPick = "!";
    // Not to self: Use the switch statement to select one of many code blocks to be executed; see W3Schools
    switch (cType) {
        case charType.LOWER:
            charPick = lowerChars[Math.floor(Math.random() * lowerChars.length)];
            break;
        case charType.UPPER:
            charPick = upperChars[Math.floor(Math.random() * upperChars.length)];
            break;
        case charType.NUMBERS:
            charPick = justNumbers[Math.floor(Math.random() * justNumbers.length)];
            break;
        case charType.SPECIAL:
            charPick = specialChars[Math.floor(Math.random() * specialChars.length)];
            break;
    }
    return charPick;
}
// Add event listener to the generate-a-password button
generateBtn.addEventListener("click", writePassword);
