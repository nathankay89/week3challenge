// **write var arrays to establish uppercase,lowercase,numbers and special char.


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  //** true or false statement to ensure you have the right promps 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ** write function for true/false statement to ask if they want uppercase,lowercase,numbers and special char.
// **use if statments and set an alert if no number is selected when they select password length (8-128)
