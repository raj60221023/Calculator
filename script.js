let displayValue = '';

// Function to append numbers or operators from buttons
function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue === '') return;
    const lastChar = displayValue[displayValue.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
        displayValue = displayValue.slice(0, -1);
    }
    displayValue += operator;
    updateDisplay();
}

function appendDot() {
    if (displayValue.includes('.')) return;
    displayValue += '.';
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function deleteChar() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch {
        displayValue = 'Error';
    }
    updateDisplay();
}

// Update the display screen
function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

// Handle keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key)) {
        // If the key is a number
        appendNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        // If the key is an operator
        appendOperator(key);
    } else if (key === '.') {
        appendDot();
    } else if (key === 'Enter') {
        // Enter key to calculate
        calculate();
    } else if (key === 'Backspace') {
        // Backspace to delete a character
        deleteChar();
    } else if (key === 'Escape') {
        // Escape to clear the display
        clearDisplay();
    }
});
