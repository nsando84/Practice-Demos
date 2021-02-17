const generateButton = document.getElementById("genButton") as HTMLInputElement
const userMessage = document.getElementById("user-message") as HTMLInputElement
const passwordTextField = document.getElementById("password-field") as HTMLInputElement
const numbersLength = document.getElementById("number-length") as HTMLInputElement

class InputEle {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    private generateElement():HTMLInputElement {
        return document.getElementById(this.name) as HTMLInputElement;
    }

    checkIfChecked():boolean {
        return this.generateElement().checked;          
    }
    
}

const passwordFields = {
    letter: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "*&^%$#@!"
}


let passwordChoices: string = ""

const symbolCheck = new InputEle("symbol")
const upperCaseCheck = new InputEle("uppercase")
const lowerCaseCheck = new InputEle("lowercase")
const numberCheck = new InputEle("number")

generateButton.addEventListener("click", ():void => {

    const symbolCheckFinal:boolean = symbolCheck.checkIfChecked();
    const upperCaseCheckFinal:boolean = upperCaseCheck.checkIfChecked();
    const lowerCaseCheckFinal:boolean = lowerCaseCheck.checkIfChecked();
    const numberCheckFinal:boolean = numberCheck.checkIfChecked();
    

    let numberLengthCheck:string | number = numbersLength.value;
    numberLengthCheck = Number(numberLengthCheck);
    

    if (numberLengthCheck < 8 || numberLengthCheck > 128) {
        userMessage.textContent = "Please choose number length between 8 & 128";
        passwordTextField.textContent = "";
    } else {

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
    
        if(!symbolCheckFinal && !upperCaseCheckFinal && !lowerCaseCheckFinal && !numberCheckFinal) {
            userMessage.textContent = "Please choose an option.";
            passwordTextField.textContent = "";
        } else {
            userMessage.textContent = "";
            passwordTextField.textContent = generatePassword(passwordChoices, numberLengthCheck);
        }
    
        passwordChoices = "";
    }

    
})

const generatePassword = (passwordChoices: string, numbersLength: number):string => {
    
    let result:string = "";
    for (let i = 0; i < numbersLength; i++) {
        result += passwordChoices[Math.floor(Math.random() * passwordChoices.length)]
    }
  
    return result;
}

