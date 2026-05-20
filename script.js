/* ===========================
BMI CALCULATOR
=========================== */

function calculateBMI(){

let age =
parseInt(document.getElementById("age").value);

let gender =
document.getElementById("gender").value;

let weight =
parseFloat(document.getElementById("weight").value);

let height =
parseFloat(document.getElementById("height").value) / 100;

if(
isNaN(age) ||
isNaN(weight) ||
isNaN(height) ||
gender === ""
){

alert(
"Please fill all fields"
);

return;
}

let bmi =
(weight / (height * height)).toFixed(1);

let status = "";
let plan = "";
let workouts = "";
let protein = "";
let vitamins = "";

if(bmi < 16){

status =
"Severe Thinness";

plan =
"High Calorie Muscle Gain Program";

workouts =
"Strength Training 3 times per week";

protein =
"2 Protein Shakes Daily";

vitamins =
"Multivitamin + Vitamin D";

}

else if(bmi < 18.5){

status =
"Underweight";

plan =
"Muscle Gain Program";

workouts =
"Strength Training 4 times per week";

protein =
"2 Protein Shakes Daily";

vitamins =
"Multivitamin + Vitamin D";

}

else if(bmi < 25){

status =
"Normal Weight";

plan =
"Balanced Lifestyle";

workouts =
"3 Workouts Per Week";

protein =
"1 Protein Shake Daily";

vitamins =
"Multivitamin";

}

else if(bmi < 30){

status =
"Overweight";

plan =
"Weight Loss Program";

workouts =
"Cardio + Strength 5 Times Per Week";

protein =
"Low-Calorie Protein Bar";

vitamins =
"Vitamin C + Multivitamin";

}

else if(bmi < 35){

status =
"Obesity Class I";

plan =
"Fat Loss Program";

workouts =
"Cardio 5 Times Per Week";

protein =
"Meal Replacement Protein";

vitamins =
"Vitamin D + Omega 3";

}

else if(bmi < 40){

status =
"Obesity Class II";

plan =
"Advanced Fat Loss Program";

workouts =
"Walking + Cardio 6 Times Per Week";

protein =
"Meal Replacement Protein";

vitamins =
"Vitamin D + Omega 3";

}

else{

status =
"Morbid Obesity";

plan =
"Medical Weight Management Program";

workouts =
"Daily Walking + Low Impact Cardio";

protein =
"Doctor Approved Protein Plan";

vitamins =
"Vitamin D + Omega 3";

}

document.getElementById("result").innerHTML =

`
<h3>
BMI: ${bmi}
</h3>

<p>
Status:
<strong>${status}</strong>
</p>
`;

document.getElementById("recommendation").innerHTML =

`
<h2>
Personal Wellness Plan
</h2>

<p>
👤 Age: ${age}
</p>

<p>
🚻 Gender: ${gender}
</p>

<p>
📊 BMI Category:
${status}
</p>

<p>
🥗 Recommended Plan:
${plan}
</p>

<p>
🏋️ Recommended Workouts:
${workouts}
</p>

<p>
🥤 Protein Recommendation:
${protein}
</p>

<p>
💊 Vitamins Recommendation:
${vitamins}
</p>

<p>
📅 Weekly Schedule:
Follow the program consistently for best results.
</p>
`;

}

/* ===========================
RECIPES
=========================== */

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

/* ===========================
MEALS
=========================== */

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

/* ===========================
DRINKS
=========================== */

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

/* ===========================
MUSCLE GAIN
=========================== */

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

/* ===========================
WATER TRACKER
=========================== */

let water = 0;

function addWater(){

water += 0.5;

document.getElementById(
"waterAmount"
).innerHTML = water + "L";

}

/* ===========================
SHOPPING CART
=========================== */

let cart = [];

function addToCart(
name,
price,
qtyId
){

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

cartItems.innerHTML +=

`
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

if(
payment ===
"Choose Payment Method"
){

alert(
"Please Select Payment Method"
);

return;

}

alert(

"Order Placed Successfully Using "

+ payment

);

}