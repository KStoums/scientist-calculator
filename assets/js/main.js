let calculation = [];
let result = "";

const operation = {
    "hex":math.hex,
    "dec":math.floor,
    "oct":math.oct,
    "bin":math.bin,
    "deg":math.deg,
    "asin":math.asin,
    "acos":math.acos,
    "atan":math.atan,
    "sin":math.sin,
    "cos":math.cos,
    "tan":math.tan,
    "sqrt":math.sqrt
}

const calculationElement = document.getElementById("calculation");
const resultElement = document.getElementById("result");

function addCalculate(calculateElement) {
    calculation.push(calculateElement);
    calculationElement.textContent = calculation.join("");
}

function removeNumber() {
    if (calculation.length === 1 || calculation.length === 0) {
        calculation = [];
        calculationElement.textContent = "0";
        return;
    }

    calculation.pop();
    calculationElement.textContent = calculation.join("");

}

function clearCalculate() {
    calculation = [];
    result = "";
    calculationElement.textContent = "0";
    resultElement.textContent = "0";
}

function calculate() {
    let calculationString = calculation.join("");

    try {
        result = math.evaluate(calculationString);
        resultElement.textContent = result;
        return result;
    } catch (error) {
        sendMessage("ERROR");
        return "0";
    }
}

function specialCalculate(calculateType) {
    let calculationString = calculation.join("");

    if (calculateType === "sqrt" || calculateType === "asin" || calculateType === "acos" ||
        calculateType === "atan" || calculateType === "sin" || calculateType === "cos" || calculateType === "tan") {
        const calculateString = calculate();
        try {
            result = operation[calculateType](calculateString);
            resultElement.textContent = result;
            calculationElement.textContent = calculateType + "(" + calculationString + ")"
        } catch (error) {
            sendMessage("ERROR");
        }
        return;
    }

    try {
        result = operation[calculateType](calculationString);
        resultElement.textContent = result;
    } catch (error) {
        sendMessage("ERROR");
    }
}

function sendMessage(message) {
    calculationElement.textContent = message;
    resultElement.textContent = message;
    setTimeout(() => {
        clearCalculate();
    }, 1000)
}