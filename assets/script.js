// assigns the generate id in the html to the variable
var generateBtn = document.querySelector("#generate");

// runs the generate password function, places the password text into the text box in the html
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generate password function to be used in write password function
function generatePassword() {
  //first prompt for password length
  var pwLength = prompt(
    "Please choose a password length between 8 and 128 characters."
  );
  pwLength = Number(pwLength);
  console.log(pwLength);

  //validate pw length, if less than or greater than the directed amount, will stop function
  if (pwLength < 8 || pwLength > 128) {
    alert("Your password must be between 8 and 128 characters.");
    return;
  }

  //arrays variables
  var lowerCaseAlpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var upperCaseAlpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var specialCharsArr = ["!", "@", "#", "$", "*", "%", "&"];

  //confirm character selections
  var lowerCase = confirm("Would you like to use lower case letters?");
  var upperCase = confirm("Would you like to use upper case letters?");
  var numbers = confirm("Would you like to use numbers?");
  var specialChars = confirm("Would you like to use special characters?");

  //validate character selection, if no characters selected, will stop function
  if (!lowerCase && !upperCase && !numbers && !specialChars) {
    alert("You must choose at least one character type.");
    return;
  }

  //concantenated new array for selected characters
  var selectedChars = [];

  if (lowerCase) {
    selectedChars = selectedChars.concat(lowerCaseAlpha);
  }
  if (upperCase) {
    selectedChars = selectedChars.concat(upperCaseAlpha);
  }
  if (numbers) {
    selectedChars = selectedChars.concat(numbersArr);
  }
  if (specialChars) {
    selectedChars = selectedChars.concat(specialCharsArr);
  }
  console.log(selectedChars);

  //password generator for loop with randomized index values
  var randomizedPW = [];

  for (var i = 0; i < pwLength; i++) {
    var randomPicks = Math.floor(Math.random() * selectedChars.length);

    randomizedPW = randomizedPW.concat(selectedChars[randomPicks]);
  }
  //logs the randomized pw array
  console.log(randomizedPW);

  //turns the randomized pw array into a string to be used as a password
  finalPW = randomizedPW.join("");
  return finalPW;
}
