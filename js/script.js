const buttons = document.querySelectorAll("button");

const input = document.getElementById("result");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        const btnvalue = buttons[i].textContent;
        if (btnvalue === "C") {
            clearResult();
        } else if (btnvalue === "=") {
            calculateResult();
        } else {
            appendValue(btnvalue);
        }
    })
}

function clearResult() {
    input.value = "";
}

function calculateResult() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = "Error"
    }
}

function appendValue(btnvalue) {
    input.value += btnvalue;
}