import { generatePassword } from "./generatePassword.js";
import { showToast } from "./toast.js";

const result = document.getElementById("result");
const length = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generate = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");


generate.addEventListener("click", () => {
    const lengthValue = length.value;
    const hasLower = lowercase.checked;
    const hasUpper = uppercase.checked;
    const hasNumber = numbers.checked;
    const hasSymbol = symbols.checked;

    result.innerText = generatePassword(lengthValue, hasLower, hasUpper, hasNumber, hasSymbol);;
});


clipboard.addEventListener("click", async () => {
    const password = result.innerText;
    if (!password) return;

    try {
        await navigator.clipboard.writeText(password);
        console.log('Password copied to clipboard:', password);
    } catch (err) {
        console.error('Unable to copy to clipboard:', err);
    }

    showToast("Password copied to clipboard");
})




