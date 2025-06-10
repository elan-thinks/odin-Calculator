let inputWindow = document.getElementById('getInput');
let saved = document.querySelector('#saveInput');

let numbers = [
    { id: 'i0', value: '0' }, { id: 'i1', value: '1' }, { id: 'i2', value: '2' },
    { id: 'i3', value: '3' }, { id: 'i4', value: '4' }, { id: 'i5', value: '5' },
    { id: 'i6', value: '6' }, { id: 'i7', value: '7' }, { id: 'i8', value: '8' },
    { id: 'i9', value: '9' }, { id: 'dot', value: '.' }
];

let operator = [
    { id: 'add', value: '+' }, { id: 'module', value: '%' },
    { id: 'multiply', value: '*' }, { id: 'divide', value: '/' },
    { id: 'substract', value: '-' }
];

let actions = [
    { id: 'equal', value: '=' }, { id: 'delete', value: 'del' },
    { id: 'clearAll', value: 'C' }
];

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        for (let i = 0; i < numbers.length; i++) {
            if (button.id === numbers[i].id) {
                inputWindow.value += numbers[i].value;
                return;
            }
        }

        for (let i = 0; i < operator.length; i++) {
            if (button.id === operator[i].id) {
                let lastChar = inputWindow.value.slice(-1);
                if ('+-*/%'.includes(lastChar)) {
                    inputWindow.value = inputWindow.value.slice(0, -1);
                }
                inputWindow.value += operator[i].value;
                return;
            }
        }

        handleOperator(button.id);
    });
});

function handleOperator(id) {
    if (id === 'clearAll') {
        inputWindow.value = '';
        saved.textContent = '';
    } else if (id === 'delete') {
        inputWindow.value = inputWindow.value.slice(0, -1);
    } else if (id === 'equal') {
        let result = inputWindow.value;
        let parts = result.split(/([+\-*/%])/).filter(p => p !== '');

    

        let total = parseFloat(parts[0]);

        for (let i = 1; i < parts.length; i += 2) {
            let op = parts[i];
            let num = parseFloat(parts[i + 1]);

            if (num ===0) {
                total=saved.textContent;
            };

            if (op === '+') total += num;
            else if (op === '-') total -= num;
            else if (op === '*') total *= num;
            else if (op === '/') total /= num;
            else if (op === '%') total %= num;
        }

        saved.textContent = total;
        inputWindow.value = saved.textContent;
    }
}
