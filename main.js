const inputs = document.querySelectorAll(".input");
const display = document.querySelector(".display")
const clearBtn = document.querySelector(".clear");
const calculateBtn = document.querySelector(".calculate");

function addToDisplay (input) {
    display.value+= input;
}

function clearDisplay () {
    display.value = "";
}

function calculate () {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
    }
}

inputs.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        addToDisplay(e.target.textContent)
    })
})

clearBtn.addEventListener("click", clearDisplay);
calculateBtn.addEventListener("click", calculate);