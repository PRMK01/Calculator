const calculator = {

    expression: '',

    bottomRowActive: true,

    memoryData: {active: false, value: ''},

    memory (target) {
        calculator.bottomRowActive = false;
        calculator.memoryData.active = true;
        for (let button of activatedButtons) {
            button.classList.remove('inactive');
        }
        switch (target.textContent) {
            case 'MC': {
                calculator.memoryData.value = '';
                for (let button of activatedButtons) {
                    button.classList.add('inactive');
                }
                break
            } case 'MR': {
                calculator.clear();
                bottomRow.textContent = calculator.memoryData.value;
                break
            } case 'M+': {
                calculator.memoryData.value = eval(+calculator.memoryData.value + +bottomRow.textContent).toString();
                break
            } case 'M-': {
                calculator.memoryData.value = eval(+calculator.memoryData.value - +bottomRow.textContent).toString();
                break
            } case 'MS': {
                calculator.memoryData.value = bottomRow.textContent;
                break
            }
        }
    },

    number (target) {
        if (calculator.bottomRowActive) {
            if (bottomRow.textContent === '0') {
                bottomRow.textContent = target.textContent;
            } else if (!(bottomRow.textContent.length >= 15)) {
                bottomRow.textContent = bottomRow.textContent + target.textContent;
            }
            return
        }
        if (topRow.textContent.includes('=')) {
            topRow.textContent = '';
            calculator.expression = '';
        }
        calculator.bottomRowActive = true;
        bottomRow.textContent = target.textContent;
    },

    clearAll () {
        topRow.textContent = '';
        bottomRow.textContent = '0';
        calculator.expression = '';
    },

    clear () {
        if (topRow.textContent.includes('=')) {
            calculator.clearAll();
        } else {
            bottomRow.textContent = '0';
        }
    },

    delete () {
        if (calculator.memoryData.active) {
            return
        }
        if (calculator.bottomRowActive) {
            if (bottomRow.textContent == '0') {
                return
            } else if ((bottomRow.textContent.length === 3 && bottomRow.textContent.includes('.') && bottomRow.textContent.includes('-')) || (bottomRow.textContent.length === 2 && bottomRow.textContent.includes('-')) || bottomRow.textContent.length === 1) {
                bottomRow.textContent = '0';
            } else {
                bottomRow.textContent = bottomRow.textContent.slice(0, bottomRow.textContent.length - 1)
            }
        }
    },
    
    operator (target) {
        if ((calculator.bottomRowActive || calculator.memoryData.active) && !(topRow.textContent.includes('='))) {
            calculator.expression = `(${calculator.expression}(${bottomRow.textContent}))`; 
            topRow.textContent = calculator.evaluate() + ' ' +  target.textContent;
            calculator.expression += target.dataset.value;
            calculator.bottomRowActive = false;
            calculator.memoryData.active = false;
        } else {
            if (/\+|-|÷|×/.test(topRow.textContent.slice(-1))) {
                topRow.textContent = topRow.textContent.slice(0, -1) + target.textContent;
                calculator.expression = calculator.expression.slice(0, -1) + target.dataset.value;
            } else {
                topRow.textContent = calculator.evaluate() + ' ' +  target.textContent;
                calculator.expression += target.dataset.value;
            }
        }
    },
    
    equals () {
        calculator.bottomRowActive = false;
        calculator.memoryData.active = false;
        if (topRow.textContent.includes('=')) {
            return
        }
        if (bottomRow.textContent.slice(-1) === '.') {
            bottomRow.textContent = bottomRow.textContent.slice(0, -1);
        }
        if (eval(bottomRow.textContent) === 0) {
            topRow.textContent = `${topRow.textContent} 0 =`;
        } else if (bottomRow.textContent.includes('-')) {
            topRow.textContent = `${topRow.textContent} (${bottomRow.textContent}) =`;
        } else {
            topRow.textContent = `${topRow.textContent} ${bottomRow.textContent} =`;
        }
        calculator.expression = `(${calculator.expression}(${bottomRow.textContent}))`;
        bottomRow.textContent = calculator.evaluate();
    },
    
    decimal () {
        if (!calculator.bottomRowActive) {
            if (topRow.textContent.includes('=')) {
                topRow.textContent = '';
                calculator.expression = '';
            }
            bottomRow.textContent = '0.';
            calculator.bottomRowActive = true;
        } else if (!(bottomRow.textContent.length >= 14) && !bottomRow.textContent.includes('.')) {
            bottomRow.textContent += '.';
        }
    },
    
    minus () {
        if (bottomRow.textContent === '0') { return }
        if (bottomRow.textContent.includes('-')) {
            bottomRow.textContent = bottomRow.textContent.slice(1, bottomRow.textContent.length);
        } else {
            bottomRow.textContent = '-' + bottomRow.textContent;
        }
    },
    
    evaluate () {
        let result = eval(calculator.expression);
        let resultRounded = +parseFloat(result).toFixed(8);
        if (resultRounded.toString().length >= 18) {
            resultRounded = resultRounded.toExponential();
        }
        resultRounded = resultRounded.toString();
        if (resultRounded.includes('e')) {
            let number = resultRounded.split('e')[0];
            let numberRounded = (+parseFloat(number).toFixed(8)).toString();
            resultRounded = numberRounded + 'e' + resultRounded.split('e')[1];
        }
        return resultRounded;
    },

    buttonClicked (e) {
    calculator[e.target.dataset.functionName](e.target)
    }
};

const buttons = document.querySelectorAll('.button');
const activatedButtons = document.querySelectorAll('.inactive');
const topRow = document.querySelector('#screen-top-part');
const bottomRow = document.querySelector('#screen-bottom-part');

buttons.forEach(button => {
    button.addEventListener('click', calculator.buttonClicked)
});