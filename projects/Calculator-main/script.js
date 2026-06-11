
let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let currentValue = "";
let previousValue = "";
let operator = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (value === "C") {
            clearDisplay();
        } else if (value === "=") {
            calculate();
        } else if (isOperator(value)) {
            handleOperator(value);
        } else {
            appendNumber(value);
        }
    })
})

function isOperator(value) {
    return ["+", "-", "/", "*"].includes(value);
}

function handleOperator(value) {
    if (currentValue === "") return;

    operator = value;
    previousValue = currentValue;
    currentValue = "";
}

function appendNumber(value) {
    currentValue += value;
    display.value = currentValue;
}

function clearDisplay() {
    currentValue = "";
    previousValue = "";
    operator = "";
    display.value = "";
}

function calculate() {
    if (operator === "" || currentValue === "") return;

    let result;

    let num1 = parseFloat(previousValue);
    let num2 = parseFloat(currentValue);

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Error";
            break;
    }

    display.value = result;
    currentValue = result.toString;
    previousValue = "";
    operator = "";
}