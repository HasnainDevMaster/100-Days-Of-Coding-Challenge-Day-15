"use strict";
// 100 Days Of Coding Challenge!
/**
 */
//-------------------------------------------------------------------------------------------
// Define a function that accepts an array of sandwich items
function make_Sandwich(...items) {
    console.log("Sandwich Summary:");
    console.log(`Ingredients: ${items.join(", ")}`);
}
// Call the function with different numbers of arguments
make_Sandwich("Turkey", "Lettuce", "Tomato", "Mayo");
make_Sandwich("Ham", "Cheese");
make_Sandwich("Veggie Patty", "Avocado", "Sprouts", "Hummus", "Pickles");
