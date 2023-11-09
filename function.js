const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

function greet(){
    alert(
      `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
    );
}

function checkOrderName(orderName) {
  return ( orderName === vegetarian || orderName === hawaiian || orderName === pepperoni
  ) 
}

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function cookTime(orderQuantity) {
  if (orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

function placeOrder (){
    let orderName;

    do {
        orderName = prompt(`Enter the name of the pizza you want to order today.`);
        if (!checkOrderName(orderName)){
            alert(
                `Invalid pizza choice! Please choose from ${vegetarian}, ${hawaiian} and ${pepperoni}`
            );
        }
    } while (!checkOrderName(orderName));
 
    let orderQuantity;
    
    do{
        orderQuantity = parseInt(prompt(`How many of ${orderName} do you want?`));
    } while (isNaN(orderQuantity)||orderQuantity<= 0);

    const orderTotal = totalCost(orderQuantity);

    if (orderQuantity){
        const time = cookTime(orderQuantity);
        alert(
        `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${time} minutes.`
        );
    }
}

greet();
placeOrder();








