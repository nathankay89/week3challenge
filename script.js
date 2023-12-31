
 // Add var arrays to include uppercase/lowercase/numbers/special characters.

var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z']
var num = ['1','2','3','4','5','6','7','8','9','0']
var spec = ['!','@','#','$','%','^','&','*','<','-','+']
var characterLength = 8;
var choiceArr = [];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var truePrompt = getPrompts();
  var passwordchar = document.querySelector("#password");

  if (truePrompt){
      var password = generatePassword();
      passwordchar.value = password;
  }else{
    passwordchar.value = "";
  }
}

// for loop to get random password from math floor and math random
function generatePassword (){

  var passLength = "";
  for(var i = 0; i < characterLength; i++){
    var randomchar = Math.floor(Math.random()* choiceArr.length);
    passLength = passLength + choiceArr[randomchar]
    }
    return passLength;
  }

// function to promp and return "try again" if response is anything but a number or 8-128 char.
function getPrompts(){
  choiceArr = [];
  characterLength = prompt ("How many characters do you want your password to be? (choose between 8-128 characters)")

  if (isNaN(characterLength) || characterLength > 128 || characterLength < 8){
  alert("Character length has to be a number between 8 to 128. Try again");
  return false;
  }
// additional promps to include uppercase/lowercase/numbers/special characters.

  if (confirm ('Would you like uppercase letters in your password?')){
  choiceArr = choiceArr.concat(uppercase);
  }
  if (confirm ('Would you like lowercase letters in your password?')){
  choiceArr = choiceArr.concat(lowercase);
  }
  if (confirm ('Would you like numbers in your password?')){
  choiceArr = choiceArr.concat(num);
  }
  if (confirm ('Would you like special characters in your password?')){
  choiceArr = choiceArr.concat(spec);
  }
  return true;
}
