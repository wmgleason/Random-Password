// Figuring out the new approach line by line

// Added this function to requiring the user to input a number between 8 and 128 using a do/while loop (because the do/while will keep looking for the right input before moving on)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPasswordLength() {
  var ok = false;
  do {
      var passwordLength = prompt("Please choose the number of characters for your password between 8 and 128");
      if (passwordLength < 8 || passwordLength > 128)
          confirm("No, silly - between 8 and 128.");
      else
          ok = true;
  } while (!ok)
  return passwordLength;
// return password;
}

function generatePassword(){
  // WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
var passwordLength = getPasswordLength();
}
function writePassword() {
  var password = generatePassword ();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password


var userChoicesArray = [];

var upperCaseChoice = confirm("Do you want uppercase letters in your password?");
if (upperCaseChoice == true) {
    document.getElementById.innerHTML = userChoicesArray;
    userChoicesArray.unshift("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");;
} 
var lowerCaseChoice = confirm("Do you want lowercase letters in your password?");
if (lowerCaseChoice == true) {
    document.getElementById.innerHTML = userChoicesArray;
    userChoicesArray.unshift("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");;
} 
var numbersChoice = confirm("Do you want numbers in your password?");
if (numbersChoice == true) {
    document.getElementById.innerHTML = userChoicesArray;
    userChoicesArray.unshift("0","1","2","3","4","5","6","7","8","9");;
} 
var specialCharsChoice = confirm("Do you want special characters in your password?");
if (specialCharsChoice == true) {
    document.getElementById.innerHTML = userChoicesArray;
    userChoicesArray.unshift("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~\"\"");;
} 
// let password = '';
// console.log(passwordLength);
// console.log(whichCase);
// console.log(num);

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// document.write(userSelectedArrays);
// Adding elements to the array for variable userSelectedChars
// function myFunction() {
//   var upperCaseChars;
//   if (confirm("Press a button!")) {
//     txt = "You pressed OK!";
//   } else {
//     txt = "You pressed Cancel!";
//   }
//   document.getElementById("demo").innerHTML = txt;
// }

