let calculation = [];
let result = "";

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
    } catch (error) {
        sendError();
    }
}

function hexCalculate() {
    let calculationString = calculation.join("");

    try {
        result = math.hex(calculationString);
        resultElement.textContent = result.substring(2);
    } catch (error) {
        sendError();
    }
}

function decCalculate() {
    let calculationString = calculation.join("");

    try {
        result = math.floor(calculationString);
        resultElement.textContent = result;
    } catch (error) {
        sendError();
    }
}

function octCalculate() {
    let calculationString = calculation.join("");

    try {
        result = math.oct(calculationString);
        resultElement.textContent = result.substring(2);
    } catch (error) {
        sendError();
    }
}

function binCalculate() {
    let calculationString = calculation.join("");

    try {
        result = math.bin(calculationString);
        resultElement.textContent = result.substring(2);
    } catch (error) {
        sendError();
    }
}

function degCalculate() {
    let calculationString = calculation.join("");

    try {
        result = math.tan(calculationString);
        resultElement.textContent = result;
    } catch (error) {
        sendError();
    }
}

function sqrtCalculate() {
    let calculationString = calculation.join("");

    try {
        const calculationResult = math.evaluate(calculationString);
        result = math.sqrt(calculationResult);
        resultElement.textContent = result;
        calculationElement.textContent = "√("+ calculationString + ")"
    } catch (error) {
        sendError();
    }
}

function sendError() {
    calculationElement.textContent = "ERROR";
    resultElement.textContent = "ERROR";
    setTimeout(() => {
        clearCalculate();
    }, 1000)
}