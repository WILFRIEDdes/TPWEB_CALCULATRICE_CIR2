// JavaScript source code

//alert('js runnig');
console.log("Alexis is here!");

/*
//---------variables---------//

var screen = document.getElementById("screen");
var numChar; //nombre total de caractères inscrits
var currentChar, previousChar; // enregistre les actuels et anciens caractères inscrits
var operations = ['+', '-', '*', '/', '%'];


//---------fonctions---------// 

function clearScreen() {
    screen.value = "";
}

function display(c) {
    screen.value += c; 
    numChar = screen.value.length;
    currentChar = c;
    getPreviousChar();
}

function calculate() {
    screen.value = eval(screen.value);
}

function getPreviousChar() {
    previousChar = screen.value.substring(numChar - 2, numChar - 1);
    checkSyntax();
}

function checkSyntax() {
    if (operations.includes(currentChar) && numChar == 1) { //n'inscrit d'opération que si il y a déjà un nombre
        removeChar();
    }

    if (operations.includes(previousChar) && operations.includes(currentChar)) {  // si on inscrit 2 opérations de suite   
        if (previousChar == currentChar) { //on retire l'opération mis en double
            alert('Erreur syntaxe');
            removeChar();
        } else {
            overwrite(); //on modifie l'opération initialement mis
        }
    }
}

function overwrite() {
    screen.value = screen.value.slice(0, numChar - 2) + screen.value.slice(numChar - 1);
}

function removeChar(){
    screen.value = screen.value.substring(0, numChar - 1);

   
} */


//---------classe---------//
class Calculator {
    constructor() {
        this.screen = document.getElementById("screen");
        this.numChar = 0;
        this.currentChar = '';
        this.previousChar = '';
        this.operations = ['+', '-', '*', '/', '%'];
        this.previousCalculation = [''];
       
    }

    clearScreen() {
        this.screen.value = '';
        this.numChar = 0;
        this.currentChar = '';
        this.previousChar = '';
    }

    display(c) {
        this.screen.value += c;
        this.numChar = this.screen.value.length;
        this.currentChar = c;
        this.getPreviousChar();
    }

    calculate() {
        this.previousCalculation[0] = this.screen.value;
        this.screen.value = eval(this.screen.value);
        console.log('previousCalculation:' + this.previousCalculation[0]);      
    }

    getPreviousChar() {
        this.previousChar = this.screen.value.substring(this.numChar - 2, this.numChar - 1);
        this.checkSyntax();
    }

    checkSyntax() {
        if (this.operations.includes(this.currentChar) && this.numChar == 1) {
            this.removeChar();
        }

        if (this.operations.includes(this.previousChar) && this.operations.includes(this.currentChar)) {
            if (this.previousChar == this.currentChar) {
                alert('Erreur syntaxe');
                this.removeChar();
            } else {
                this.overwrite();
            }
        }
    }

    overwrite() {
        this.screen.value = this.screen.value.slice(0, this.numChar - 2) + this.screen.value.slice(this.numChar - 1);
    }

    removeChar() {
        this.screen.value = this.screen.value.substring(0, this.numChar - 1);
        this.numChar--;
        this.currentChar = '';
        this.previousChar = '';

        if (this.numChar == 0) {
            this.screen.value = this.previousCalculation;
        }
    }
}

const calculator = new Calculator();