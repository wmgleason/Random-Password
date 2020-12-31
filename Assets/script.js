// Assignment Code
// WHEN I click the button to generate a password
var generateBtn = document.querySelector("#generate");
var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                      "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var characterNum = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                    "0","1","2","3","4","5","6","7","8","9"];

var upperNum = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                "0","1","2","3","4","5","6","7","8","9"];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

function generatePassword(){
  // WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordLength = prompt("Please choose the number of characters for your password between 8 and 128");
  // THEN I choose uppercase,
  var whichCase = confirm("Do you want uppercase letters?");

  var num = confirm("Do you want numbers in your password?");
  
  // This creates a local variable for the password instead of getting the DOM object with id="password"
  let password = '';

  console.log(passwordLength);
  console.log(whichCase);
  console.log(num);
   // if uppercase and numbers are confirmed
   if(num === true && whichCase === true){
    // this line means i = 0 but after it goes through it once it executes the next line i++ until i is equal to the password length
    for(var i = 0; i <passwordLength; i++){

      charPick = upperNum[Math.floor(Math.random()*upperNum.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);
    }
  }  
//if uppercase but no numbers
    else if(num != true && whichCase === true){
      for(var i = 0; i <passwordLength; i++){

      charPick = upperChars[Math.floor(Math.random()*upperChars.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);
    }
  }
// if no uppercase but yes on numbers 
    else if(num === true && whichCase != true){
      for(var i = 0; i <passwordLength; i++){

        charPick = characterNum[Math.floor(Math.random()*characterNum.length)];
        console.log(charPick);
        password = password.toString()+charPick.toString();
        console.log(password);       
      }

    }
    // if no uppercase AND no numbers - password is all lowercase letters
    else if(num != true && whichCase != true){
      for(var i = 0; i <passwordLength; i++){

        charPick = characters[Math.floor(Math.random()*characters.length)];
        console.log(charPick);
        password = password.toString()+charPick.toString();
        console.log(password);


  } 
    }
    return password;
}

