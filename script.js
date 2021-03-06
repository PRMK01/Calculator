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

                if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "+") { 
                    calculator.correct();
                    calculator.evaluate();
                    console.log("It's a operation after clicking a = sign");
                }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "-") {
                    calculator.correct();
                    calculator.evaluate();
                    console.log("It's a operation after clicking a = sign");
                }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "*") {
                    calculator.correct();
                    calculator.evaluate();
                    console.log("It's a operation after clicking a = sign");
                }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "/") {
                    calculator.correct();
                    calculator.evaluate();
                    console.log("It's a operation after clicking a = sign");
                }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == ".") {
                    calculator.correct();
                    calculator.evaluate();
                    console.log("It's a operation after clicking a = sign");
                }

                else {
                    calculator.evaluate();
                    console.log("It's a operation after clicking a = sign");
                }

            break;

            case ".":

                if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == ".") {
                    console.log("It's a operation after clicking a . if the last character was a . sign");
                }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "+") {
                    console.log("It's a operation after clicking a . if the last character was a + sign");
                }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "-") {
                    console.log("It's a operation after clicking a . if the last character was a - sign");
                }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "*") {
                    console.log("It's a operation after clicking a . if the last character was a * sign");
                }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "/") {
                    console.log("It's a operation after clicking a . if the last character was a / sign");
                }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == undefined) {
                    calculator.addToInput("0");
                    calculator.addToInput(divHtmlText);
                    calculator.addToMathRow("0");
                    calculator.addToMathRow(divHtmlText);
                    console.log("It's a operation after clicking a . if the mathRow was empty");
                }

                else {
                    for (let g = 0; g < calculator.input.value.length; g++) {
                        let zz = calculator.input.value[g];

                        if (zz == ".") {
                            console.log("It's a operation after clicking a . if there was already a . in the input");
                            break;
                        }

                        else {
                            if (g == calculator.input.value.length - 1) {
                                calculator.addToInput(".");
                                calculator.addToMathRow(".");
                                console.log("It's a operation after clicking a . if there was already a number and no . in input yet");
                            }

                            else {
                                console.log("Do nothing")
                            }
                        }
                    };
                }

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


                if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "+") {
                    calculator.clearInput();
                    calculator.addToInput(divHtmlText);
                    calculator.addToMathRow(divHtmlText);
                    console.log("It's a operation after clicking a number if the last character was a + sign");
                }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "-") {
                    calculator.clearInput();
                    calculator.addToInput(divHtmlText);
                    calculator.addToMathRow(divHtmlText);
                    console.log("It's a operation after clicking a number if the last character was a - sign");
                }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "*") {
                    calculator.clearInput();
                    calculator.addToInput(divHtmlText);
                    calculator.addToMathRow(divHtmlText);
                    console.log("It's a operation after clicking a number if the last character was a * sign");
                }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "/") {
                    calculator.clearInput();
                    calculator.addToInput(divHtmlText);
                    calculator.addToMathRow(divHtmlText);
                    console.log("It's a operation after clicking a number if the last character was a / sign");
                }

                else {
                    calculator.addToInput(divHtmlText);
                    calculator.addToMathRow(divHtmlText);
                    console.log("It's a operation after clicking a number if the last character wasn't a operator");
                }


            break;

            case "0":
            case "00":

                if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == undefined) {
                    console.log("It's a operation after clicking a 0 if the mathRow was empty");
                 }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "-") {
                    console.log("It's a operation after clicking a 0 if the last character was a - sign");
                 }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "+") {
                    console.log("It's a operation after clicking a 0 if the last character was a + sign");
                 }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "*") {
                    console.log("It's a operation after clicking a 0 if the last character was a * sign");
                 }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "/") {
                    console.log("It's a operation after clicking a 0 if the last character was a / sign");
                 }

                else {
                    calculator.addToInput(divHtmlText);
                    calculator.addToMathRow(divHtmlText);
                    console.log("It's a operation after clicking a 0 if the last character was a number");
                }

            break;

            case "+":
            case "-":
            case "*":
            case "/":

                if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "+") { 
                    calculator.correct();
                    calculator.addToMathRow(divHtmlText);
                    console.log("It's a operation after clicking a operator if the last character was a + sign");
                }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "-") {
                    calculator.correct();
                    calculator.addToMathRow(divHtmlText);
                    console.log("It's a operation after clicking a operator if the last character was a - sign");
                }


                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "*") {
                    calculator.correct();
                    calculator.addToMathRow(divHtmlText);
                    console.log("It's a operation after clicking a operator if the last character was a * sign");
                }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == "/") { 
                    calculator.correct();
                    calculator.addToMathRow(divHtmlText);
                    console.log("It's a operation after clicking a operator if the last character was a / sign");
                }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == undefined) { 
                    calculator.correct();
                    calculator.addToMathRow(divHtmlText);
                    console.log("It's a operation after clicking a operator if the mathRow was empty");
                }

                else if (calculator.mathRow.value[calculator.mathRow.value.length - 1] == ".") { 
                    console.log("It's a operation after clicking a operator if the last character was a . ");
                }

                else {
                    calculator.addToMathRow(divHtmlText);
                    console.log("It's a operation after clicking a operator if the last character was a number");
                }

            break;


            case "C":

                calculator.clearInput();
                calculator.clearMathRow();
                console.log("It's a operation after clicking a C");
                
            break;

        };

    },

    addToInput: function (str) {
        this.input.value += str;
        console.log("It's a operation after inducing a function addToInput");
    },

    addToMathRow: function (str) {
        this.mathRow.value += str;
        console.log("It's a operation after inducing a function addToMathRow");
    },

    evaluate: function () {
        let result = Math.round(math.evaluate(calculator.mathRow.value) * 1000) / 1000;
        calculator.mathRow.value = result;
        calculator.input.value = result;
        console.log("It's a operation after inducing a function evaluate");
    },

    clearInput: function () {
        calculator.input.value = "";
        console.log("It's a operation after inducing a function clearInput");
    },

    clearMathRow: function () {
        calculator.mathRow.value = "";
        console.log("It's a operation after inducing a function clearMathRow");
    },

    correct: function () {
        let d = calculator.mathRow.value;
        calculator.mathRow.value = d.slice(0, -1);
        console.log("It's a operation after inducing a function correct");
    }

}
