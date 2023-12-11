
// ===========================
// ===========================
// Assignment code starts here
// ===========================
// ===========================

// variables
const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChar = "0123456789";
const specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

var length = 0;
var isLower = false;
var isUpper = false;
var isNumeric = false;
var isSpecial = false;
var placeholder = "";
var pending = "";

// redundant arrays for final checking the password
const lowerAlphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
  "w", "x", "y", "z"];
const upperAlphaArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
  "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
  "W", "X", "Y", "Z"];
const numericCharArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",",
  "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[",
  "]", "^", "_", "`", '"', ",", "{", "|", "}", "~"];






function generatePassword() {
  // Resets variables for clean starts
  // =================================
  // reset variable to stock between runs
  length = 0;
  isLower = false;
  isUpper = false;
  isNumeric = false;
  isSpecial = false;
  placeholder = "";
  pending = "";

  // Prompts for configuration
  // =========================
  // Reruns prompt until an appropriate length has been decided

  do {
    length = parseFloat(window.prompt("How long is this thing? \nFrom 8 to 128, of course.", "Pick something"));
    // console.log(length);
    if (length < 8 || length > 128) {
      // console.log(length);
    }
  }
  while (length < 8 || length > 128)

  // Prompts for configuration
  // =========================
  // Prompts for upper lower numeric and special characters

  isLower = window.prompt("Does this need to be lower case?", "Yea or cancel for nah");
  isUpper = window.prompt("How about upper case?", "Yea or cancel for nah");
  isNumeric = window.prompt("What about numbers?", "Yea or cancel for nah");
  isSpecial = window.prompt("And those special guys?", "Yea or cancel for nah");


  // Building password list
  // ======================
  // Pull random char from lowerAlpha

  if (isLower) {
    for (var i = 0; i < length; i++) {
      placeholder += lowerAlpha.charAt(Math.floor(Math.random() * lowerAlpha.length));
    }
  }

  // Pull random char from upperAlpha
  if (isUpper) {
    for (i = 0; i < length; i++) {
      placeholder += upperAlpha.charAt(Math.floor(Math.random() * upperAlpha.length));
    }
  }

  // Pull random char from numericChar
  if (isNumeric) {
    for (i = 0; i < length; i++) {
      placeholder += numericChar.charAt(Math.floor(Math.random() * numericChar.length));
    }
  }

  // Pull random char from specialChar
  if (isSpecial) {
    for (i = 0; i < length; i++) {
      placeholder += specialChar.charAt(Math.floor(Math.random() * specialChar.length));
    }
  }

  // Gather all characters and select password characters
  // ====================================================
  // Pull random char from placeholder for pending password

  for (i = 0; i < length; i++) {
    pending += placeholder.charAt(Math.floor(Math.random() * placeholder.length));
  }
  
  // Double check inclusion of all required character types
  // ======================================================
  // if character at pending i index is not found in string lowerAlpha
  // replace character 0 with random character in lowerAlpha
  
  if (isLower) {
    for (i = 0; i < pending.length; i++) {
      var index = lowerAlphaArray.indexOf(lowerAlphaArray, pending[i]);
      if (index <= -1) {
        pending[0] = lowerAlpha.charAt(Math.floor(Math.random() * lowerAlpha.length));
      }   
    }
  }
  
  // if character at pending i index is not found in string upperAlpha
  // replace character 1 with random character in upperAlpha
  
  if (isUpper) {
    for (i = 0; i < pending.length; i++) {
      index = upperAlphaArray.indexOf(upperAlphaArray, pending[i]);
      if (index <= -1) {
        pending[1] = lowerAlpha.charAt(Math.floor(Math.random() * lowerAlpha.length));
      }   
    }
  }
  
  // if character at pending i index is not found in string numericChar
  // replace character 2 with random character in numericChar
  
  if (isNumeric) {
    for (i = 0; i < pending.length; i++) {
      index = numericCharArray.indexOf(numericCharArray, pending[i]);
      if (index <= -1) {
        pending[2] = numericChar.charAt(Math.floor(Math.random() * numericChar.length)); 
      }   
    }
  }
  
  // if character at pending i index is not found in string specialChar
  // replace character 3 with random character in specialChar
  
  if (isSpecial) {
    for (i = 0; i < pending.length; i++) {
      index = specialCharArray.indexOf(specialCharArray, pending[i]);
      if (index <= -1 ) {
        pending[3] = specialChar.charAt(Math.floor(Math.random() * specialChar.length));
      }   
    }
  }
  
  // Final result
  // ============
  // returns final result

  return pending;  
}


// =========================
// =========================
// Assignment code ends here
// =========================
// =========================



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
