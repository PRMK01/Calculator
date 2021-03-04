window.onload = function () {
    calculator.init();

};

let calculator = {
    buttons: undefined,
    input: undefined,
    mathRow: undefined,

    init: function () {
        this.buttons = document.querySelectorAll(".numbers button, .operators button");
        // console.log(this.buttons);

        this.input = document.getElementById("input");

        this.mathRow = document.getElementById("mathrow");

        for (let i = 0; i < this.buttons.length; i++) {
            let el = this.buttons[i];
            el.addEventListener("click", calculator.buttonClick)
        };

    },

    buttonClick: function (e) {
        let divHtmlText = e.target.innerHTML;
        // Tu chyba chodzi o to, że po wciśnięciu w TARGET i wywołaniu tej funkcji, wyszukujemy wewnętrznego tekstu w obiekcie w html...

        console.log("button: " + divHtmlText);

        switch (divHtmlText) {
            case "=":

                calculator.evaluate();
                
            break;

            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":            
            case "7":  
            case "8":
            case "9":

                if (calculator.mathRow[calculator.mathRow.length - 1].value = "+") {
                    calculator.clearInput();
                    calculator.addToInput(divHtmlText);
                    calculator.addToMathRow(divHtmlText);
                }

                else if (calculator.mathRow[calculator.mathRow.length - 1].value = "-") {
                    calculator.clearInput();
                    calculator.addToInput(divHtmlText);
                    calculator.addToMathRow(divHtmlText);
                }

                else if (calculator.mathRow[calculator.mathRow.length - 1].value = "*") {
                    calculator.clearInput();
                    calculator.addToInput(divHtmlText);
                    calculator.addToMathRow(divHtmlText);
                }

                else if (calculator.mathRow[calculator.mathRow.length - 1].value = "/") {
                    calculator.clearInput();
                    calculator.addToInput(divHtmlText);
                    calculator.addToMathRow(divHtmlText);
                }

                else {
                    calculator.addToInput(divHtmlText);
                    calculator.addToMathRow(divHtmlText);
                }

            break;

            case "0":
            case "00":

                if (calculator.mathRow[calculator.mathRow.length - 1].value = "0") { }

                else if (calculator.mathRow[calculator.mathRow.length - 1].value = "") { }

                else if (calculator.mathRow[calculator.mathRow.length - 1].value = "-") { }

                else if (calculator.mathRow[calculator.mathRow.length - 1].value = "+") { }

                else if (calculator.mathRow[calculator.mathRow.length - 1].value = "*") { }

                else if (calculator.mathRow[calculator.mathRow.length - 1].value = "/") { }

                else {
                    calculator.addToInput(divHtmlText);
                    calculator.addToMathRow(divHtmlText);
                }

            break;

            case "+":
            case "-":
            case "*":
            case "/":

                if (calculator.mathRow[calculator.mathRow.length - 1].value = "+") { 
                    calculator.correct();
                    calculator.addToMathRow(divHtmlText);
                }

                else if (calculator.mathRow[calculator.mathRow.length - 1].value = "-") {
                    calculator.correct();
                    calculator.addToMathRow(divHtmlText);
                }


                else if (calculator.mathRow[calculator.mathRow.length - 1].value = "*") {
                    calculator.correct();
                    calculator.addToMathRow(divHtmlText);
                }

                else if (calculator.mathRow[calculator.mathRow.length - 1].value = "/") {
                    calculator.correct();
                    calculator.addToMathRow(divHtmlText);
                }

                else {
                    calculator.addToMathRow(divHtmlText);
                }

            break;


            case "C":

                calculator.clearInput();
                calculator.clearMathRow();
                
            break;

        };

    },

    addToInput: function (str) {
        this.input.value += str;
    },

    addToMathRow: function (str) {
        this.mathRow.value += str;
    },

    evaluate: function () {
        let result = math.evaluate(calculator.mathRow.value);
        calculator.mathRow.value = result;
        calculator.input.value = result;
    },

    clearInput: function () {
        calculator.input.value = "";
    },

    clearMathRow: function () {
        calculator.mathRow.value = "";
    },

    correct: function () {
        let d = calculator.mathRow.value;
        calculator.mathRow.value = d.slice(0, -1);
    }

}
