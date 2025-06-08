function calculateChaiIngredients(numberOfCups) {
    const ingredientsPerCup = {
        water: 200,       // ml
        milk: 50,         // ml
        teaLeaves: 1,     // tablespoons
        sugar: 2          // teaspoons
    };

    const totalIngredients = {
        water: ingredientsPerCup.water * numberOfCups,
        milk: ingredientsPerCup.milk * numberOfCups,
        teaLeaves: ingredientsPerCup.teaLeaves * numberOfCups,
        sugar: ingredientsPerCup.sugar * numberOfCups
    };

    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalIngredients.water} ml`);
    console.log(`Milk: ${totalIngredients.milk} ml`);
    console.log(`Tea Leaves (Majani): ${totalIngredients.teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${totalIngredients.sugar} teaspoons`);
    console.log(`\nEnjoy your Chai Bora!`);
}

// Prompt the user
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(input);

// Validate input and run
if (!isNaN(numberOfCups) && numberOfCups > 0) {
    calculateChaiIngredients(numberOfCups);
} else {
    console.log("Please enter a valid number of cups.");
}
