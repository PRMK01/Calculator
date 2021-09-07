const activatedButtons = document.querySelectorAll('.inactive');
const topRow = document.querySelector('.screen-top-part');
const bottomRow = document.querySelector('.screen-bottom-part');
const memory = { active: false,value: '' }
let expression = '';
let bottomRowActive = true;

function memoryUpdate (target) {
    bottomRowActive = false;
    memory.active = true;
    for (button of activatedButtons) {
        button.classList.remove('inactive');
    }
    switch (target.textContent) {
        case 'MC': {
            memory.value = '';
            for (button of activatedButtons) {
                button.classList.add('inactive');
            }
            break
        } case 'MR': {
            clearEntry();
            bottomRow.textContent = memory.value;
            break
        } case 'M+': {
            memory.value = eval(+memory.value + +bottomRow.textContent).toString();
            break
        } case 'M-': {
            memory.value = eval(+memory.value - +bottomRow.textContent).toString();
            break
        } case 'MS': {
            memory.value = bottomRow.textContent;
            break
        }
    }
}

function appendNumber (target) {
    if (bottomRowActive) {
        if (bottomRow.textContent === '0') {
            bottomRow.textContent = target.textContent;
        } else if (!(bottomRow.textContent.length >= 15)) {
            bottomRow.textContent = bottomRow.textContent + target.textContent;
        }
        return
    }
    if (topRow.textContent.includes('=')) {
        topRow.textContent = '';
        expression = '';
    }
    bottomRowActive = true;
    bottomRow.textContent = target.textContent;
}

function clearAll () {
    topRow.textContent = '';
    bottomRow.textContent = '0';
    expression = '';
}

function clearEntry () {
    if (topRow.textContent.includes('=')) {
        clearAll();
    } else {
        bottomRow.textContent = '0';
    }
}

function deleteLast () {
    if (memory.active) {
        return
    }
    if (bottomRowActive) {
        if (bottomRow.textContent == '0') {
            return
        } else if ((bottomRow.textContent.length === 3 && bottomRow.textContent.includes('.') && bottomRow.textContent.includes('-')) || (bottomRow.textContent.length === 2 && bottomRow.textContent.includes('-')) || bottomRow.textContent.length === 1) {
            bottomRow.textContent = '0';
        } else {
            bottomRow.textContent = bottomRow.textContent.slice(0, bottomRow.textContent.length - 1)
        }
    }
}

function basicOperation (target) {
    if (bottomRowActive || memory.active) {
        expression = `(${expression}(${bottomRow.textContent}))`; 
        topRow.textContent = evaluate() + ' ' +  target.textContent;
        expression += target.dataset.value;
        bottomRowActive = false;
        memory.active = false;
    } else {
        if (/\+|-|÷|×/.test(topRow.textContent.slice(-1))) {
            topRow.textContent = topRow.textContent.slice(0, -1) + target.textContent;
            expression = expression.slice(0, -1) + target.dataset.value;
        } else {
            topRow.textContent = evaluate() + ' ' +  target.textContent;
            expression += target.dataset.value;
        }
    }
}

function equals () {
    bottomRowActive = false;
    memory.active = false;
    if (topRow.textContent.includes('=')) {
        return
    }
    if (bottomRow.textContent.includes('-')) {
        topRow.textContent = `${topRow.textContent} (${bottomRow.textContent}) =`;
    } else {
        topRow.textContent = `${topRow.textContent} ${bottomRow.textContent} =`;
    }
    expression = `(${expression}(${bottomRow.textContent}))`;
    bottomRow.textContent = evaluate();
}

function decimalPoint () {
    if (!bottomRowActive) {
        bottomRow.textContent = '0.';
        bottomRowActive = true;
    } else if (!(bottomRow.textContent.length >= 14) && !bottomRow.textContent.includes('.')) {
        bottomRow.textContent += '.';
    }
}

function minus () {
    if (bottomRow.textContent === '0') { return }
    if (bottomRow.textContent.includes('-')) {
        bottomRow.textContent = bottomRow.textContent.slice(1, bottomRow.textContent.length);
    } else {
        bottomRow.textContent = '-' + bottomRow.textContent;
    }
}

function evaluate () {
    let result = eval(expression);
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
}