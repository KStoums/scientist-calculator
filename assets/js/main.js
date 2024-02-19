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
        sendMessage("ERROR");
    }
}

function hexCalculate() {
    let calculationString = calculation.join("");

    try {
        result = math.hex(calculationString);
        resultElement.textContent = result.substring(2);
    } catch (error) {
        sendMessage("ERROR");
    }
}

function decCalculate() {
    let calculationString = calculation.join("");

    try {
        result = math.floor(calculationString);
        resultElement.textContent = result;
    } catch (error) {
        sendMessage("ERROR");
    }
}

function octCalculate() {
    let calculationString = calculation.join("");

    try {
        result = math.oct(calculationString);
        resultElement.textContent = result.substring(2);
    } catch (error) {
        sendMessage("ERROR");
    }
}

function binCalculate() {
    let calculationString = calculation.join("");

    try {
        result = math.bin(calculationString);
        resultElement.textContent = result.substring(2);
    } catch (error) {
        sendMessage("ERROR");
    }
}

function degCalculate() {
    let calculationString = calculation.join("");

    try {
        result = math.tan(calculationString);
        resultElement.textContent = result;
    } catch (error) {
        sendMessage("ERROR");
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
        sendMessage("ERROR");
    }
}

function asinCalculate() {
    let calculationString = calculation.join("");

    try {
        const calculationResult = math.evaluate(calculationString);
        result = math.asin(calculationResult);
        resultElement.textContent = result;
        calculationElement.textContent = "asin("+ calculationString + ")"
    } catch (error) {
        sendMessage("ERROR");
    }
}

function acosCalculate() {
    let calculationString = calculation.join("");

    try {
        const calculationResult = math.evaluate(calculationString);
        result = math.acos(calculationResult);
        resultElement.textContent = result;
        calculationElement.textContent = "acos("+ calculationString + ")"
    } catch (error) {
        sendMessage("ERROR");
    }
}

function atanCalculate() {
    let calculationString = calculation.join("");

    try {
        const calculationResult = math.evaluate(calculationString);
        result = math.atan(calculationResult);
        resultElement.textContent = result;
        calculationElement.textContent = "atan("+ calculationString + ")"
    } catch (error) {
        sendMessage("ERROR");
    }
}

function sinCalculate() {
    let calculationString = calculation.join("");

    try {
        const calculationResult = math.evaluate(calculationString);
        result = math.sin(calculationResult);
        resultElement.textContent = result;
        calculationElement.textContent = "sin("+ calculationString + ")"
    } catch (error) {
        sendMessage("ERROR");
    }
}

function cosCalculate() {
    let calculationString = calculation.join("");

    try {
        const calculationResult = math.evaluate(calculationString);
        result = math.cos(calculationResult);
        resultElement.textContent = result;
        calculationElement.textContent = "cos("+ calculationString + ")"
    } catch (error) {
        sendMessage("ERROR");
    }
}

function tanCalculate() {
    let calculationString = calculation.join("");

    try {
        const calculationResult = math.evaluate(calculationString);
        result = math.tan(calculationResult);
        resultElement.textContent = result;
        calculationElement.textContent = "tan("+ calculationString + ")"
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