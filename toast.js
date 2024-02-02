export const showToast = (toastText) => {
    const toastElement = document.getElementById("toast");
    console.log(
        "SHOWING TOAST",
    )
    // Set the toast text
    toastElement.textContent = toastText;

    // Show the toast
    toastElement.classList.remove("hidden");
    toastElement.classList.add("visible");
    toastElement.style.display = "block";

    // Hide the toast after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
        toastElement.classList.remove("visible");
        toastElement.classList.add("hidden");
    }, 3000);
}
