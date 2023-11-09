// const pizzaTypeEl = document.getElementById("pizzaType");
const buttonEl = document.getElementById("btn")
const resultEl = document.getElementById("result");

buttonEl.addEventListener("click", ()=>{
    const quantityEl = document.getElementById("quantity");
    const quantity = parseInt(quantityEl.value);
    const totalCost = 80 * quantity;

    resultEl.textContent = "Great Choice! It will cost $" + totalCost + ". Thank you for ordering!";
});
