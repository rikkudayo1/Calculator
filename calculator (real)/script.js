const upperDisplay = document.getElementById("upper-display");
const lowerDisplay = document.getElementById("lower-display");

function addUp(val) {
    lowerDisplay.value += val
}

function clearDisplay() {
    lowerDisplay.value = ""
    upperDisplay.value = ""
}

function clearError() {
    lowerDisplay.value = ""
}

function backSpace() {
    lowerDisplay.value = lowerDisplay.value.substr(0, lowerDisplay.value.length - 1);
}

function showResult(callback) {
    try {
        upperDisplay.value = lowerDisplay.value
        lowerDisplay.value = eval(lowerDisplay.value)
    } catch (error) {
        lowerDisplay.value = "Error"
        setTimeout(() => {
            callback()
        }, 3000);
    }
}