function calculateChaiIngredients(numberOfCups) {
    // Define the ingredients needed per cup of Kenyan Chai
    const ingredientsPerCup = {
        water: 200,       // ml
        milk: 50,         // ml
        teaLeaves: 1,     // tablespoons
        sugar: 2          // teaspoons
    };
    // Calculate the total ingredients needed for the specified number of cups by multiplying the ingredients per cup by the number of cups
    const totalIngredients = {
        water: ingredientsPerCup.water * numberOfCups,
        milk: ingredientsPerCup.milk * numberOfCups,
        teaLeaves: ingredientsPerCup.teaLeaves * numberOfCups,
        sugar: ingredientsPerCup.sugar * numberOfCups
    };
    // Display the total ingredients needed
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalIngredients.water} ml`);
    console.log(`Milk: ${totalIngredients.milk} ml`);
    console.log(`Tea Leaves (Majani): ${totalIngredients.teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${totalIngredients.sugar} teaspoons`);
    console.log(`\nEnjoy your Chai Bora!`);
}

// Prompt the user to enter the number of cups of Chai Bora they want to make
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(input);

// Validate input to ensure it's a positive number
if (!isNaN(numberOfCups) && numberOfCups > 0) {
    calculateChaiIngredients(numberOfCups);
} else {
    // If the input is not a valid number, display an error message
    console.log("Please enter a valid number of cups.");
}
