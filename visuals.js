import {buttons} from "./script.js";

(() => {
    let debounceTimeout;

    document.addEventListener('keyup', handlekeys)

    function handlekeys (ev) {
        for (let button of buttons) {
            if (button.innerText == ev.key || button.dataset.value == ev.key) {
                button.click();
            }
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.focus();
            button.style.outline = 'none';   
            clickVisual(button);
        });
        button.addEventListener('blur', () => {
            button.style.outline = 'none';
        });
        button.addEventListener('focus', () => {
            button.style.outline = 'solid 2px rgba(255, 255, 255, 0.3)';
        });
    })

    function clickVisual (button) {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            buttons.forEach(button => {
                button.classList.remove('active');
            })
        }, 40);
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
        }, 40);
    }
})();