function calculateBMI(){

let age =
document.getElementById("age").value;

let gender =
document.getElementById("gender").value;

let weight =
document.getElementById("weight").value;

let height =
document.getElementById("height").value;

height = height / 100;

let bmi =
weight / (height * height);

let status = "";

if(bmi < 18.5){

status =
"Underweight";
}

else if(bmi >= 18.5 && bmi < 25){

status =
"Normal Weight";
}

else if(bmi >= 25 && bmi < 30){

status =
"Overweight";
}

else{

status =
"Obese";
}

document.getElementById("result")
.innerHTML =

"Gender: "
+ gender
+ "<br><br>" +

"Age: "
+ age
+ "<br><br>" +

"Your BMI Is: "
+ bmi.toFixed(1)
+ "<br><br>" +

"Status: "
+ status;
}
function toggleRecipes(){

let recipes =

document.getElementById("recipesList");

if(recipes.style.display === "block"){

recipes.style.display = "none";
}

else{

recipes.style.display = "block";
}
}
function toggleMeals(){

let meals =
document.getElementById("mealsList");

if(meals.style.display === "block"){

meals.style.display = "none";
}

else{

meals.style.display = "block";
}
}

function toggleDrinks(){

let drinks =
document.getElementById("drinksList");

if(drinks.style.display === "block"){

drinks.style.display = "none";
}

else{

drinks.style.display = "block";
}
}
function toggleMuscle(){

let muscle =
document.getElementById("muscleList");

if(muscle.style.display === "block"){

muscle.style.display = "none";
}

else{

muscle.style.display = "block";
}
}
/* WATER TRACKER */

let water = 0;

function addWater(){

water += 0.5;

document.getElementById("waterAmount")
.innerHTML = water + "L";
}
let cart = [];

function addToCart(name,price,qtyId){

let quantity =
parseInt(
document.getElementById(qtyId).value
);

cart.push({

name:name,
price:price,
quantity:quantity

});

updateCart();

}

function updateCart(){

let cartItems =
document.getElementById("cartItems");

let total = 0;

cartItems.innerHTML = "";

cart.forEach(item=>{

let subtotal =
item.price * item.quantity;

total += subtotal;

cartItems.innerHTML += `

<p>

${item.name}
x${item.quantity}

= $${subtotal}

</p>

`;

});

document.getElementById(
"totalPrice"
).innerHTML =

"Total: $" + total;

}

function checkout(){

let payment =

document.getElementById(
"paymentMethod"
).value;

if(payment ===
"Choose Payment Method"){

alert(
"Please select payment method"
);

return;
}

alert(
"Order placed successfully using "
+ payment
);

}