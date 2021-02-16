var generateButton = document.getElementById("genButton");
var userMessage = document.getElementById("user-message");
var passwordTextField = document.getElementById("password-field");
var numbersLength = document.getElementById("number-length");
var InputEle = /** @class */ (function () {
    function InputEle(name) {
        this.name = name;
    }
    InputEle.prototype.generateElement = function () {
        return document.getElementById(this.name);
    };
    InputEle.prototype.checkIfChecked = function () {
        return this.generateElement().checked;
    };
    return InputEle;
}());
var passwordFields = {
    letter: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "*&^%$#@!"
};
var passwordChoices = "";
var symbolCheck = new InputEle("symbol");
var upperCaseCheck = new InputEle("uppercase");
var lowerCaseCheck = new InputEle("lowercase");
var numberCheck = new InputEle("number");
generateButton.addEventListener("click", function () {
    var symbolCheckFinal = symbolCheck.checkIfChecked();
    var upperCaseCheckFinal = upperCaseCheck.checkIfChecked();
    var lowerCaseCheckFinal = lowerCaseCheck.checkIfChecked();
    var numberCheckFinal = numberCheck.checkIfChecked();
    var numberLengthCheck = numbersLength.value;
    numberLengthCheck = Number(numberLengthCheck);
    if (numberLengthCheck < 8 || numberLengthCheck > 128) {
        userMessage.textContent = "Please choose number length between 8 & 128";
        passwordTextField.textContent = "";
    }
    else {
        if (symbolCheckFinal) {
            passwordChoices += passwordFields.symbols;
        }
        if (upperCaseCheckFinal) {
            passwordChoices += passwordFields.letter.toUpperCase();
        }
        if (lowerCaseCheckFinal) {
            passwordChoices += passwordFields.letter;
        }
        if (numberCheckFinal) {
            passwordChoices += passwordFields.numbers;
        }
        if (!symbolCheckFinal && !upperCaseCheckFinal && !lowerCaseCheckFinal && !numberCheckFinal) {
            userMessage.textContent = "Please choose an option.";
            passwordTextField.textContent = "";
        }
        else {
            userMessage.textContent = "";
            passwordTextField.textContent = generatePassword(passwordChoices, numberLengthCheck);
        }
        passwordChoices = "";
    }
});
var generatePassword = function (passwordChoices, numbersLength) {
    var result = "";
    for (var i = 0; i < numbersLength; i++) {
        result += passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
    }
    return result;
};
