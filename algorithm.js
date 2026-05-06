const bread = 2;
const peanutButter = true;
const jelly = false;


if(bread >= 2 && peanutButter && jelly){
    console.log("Make the sandwich!");
}
else{
    console.log("Missing ingredients");
}

// Start
// Set bread slices
// See if peanut butter is available
// See if jelly is available
// If all ingredients are available
// Display make the sandwich
// else
// Display missing ingredients
// End



// Start
// Set bill amount
// Set tip percentage
// Calculate tip amount
// Calculate total amount
// Display tip amount
// Display total amount
// End

const billAmount = 2000;
const tipPercentage = 33;

const tipAmount = (billAmount* tipPercentage) / 100;
const totalAmount = billAmount + tipAmount;

console.log("Tip Amount ; ", tipAmount);
console.log("Total amount : ", totalAmount);


function logResult(result){
    console.log("The result is : ", result);
}

function addNumber(num1,num2,callback){
    const sum = num1 + num2;
    if(sum > 30)
        callback(sum);
}

function add(a,b){
    return a+b ;
}

const sum1 = add(5,10);
console.log(sum1);

addNumber(20,18,logResult);