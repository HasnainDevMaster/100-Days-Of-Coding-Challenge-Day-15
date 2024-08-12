// 100 Days Of Coding Challenge!

/** Question 44:
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered.
Call the function three times, using a different number of arguments each time.*/

//-------------------------------------------------------------------------------------------------

// Define a function that accepts an array of sandwich items
function make_Sandwich(...items: string[]) {
  console.log("Sandwich Summary:");
  console.log(`Ingredients: ${items.join(", ")}`);
}

// Call the function with different numbers of arguments
make_Sandwich("Turkey", "Lettuce", "Tomato", "Mayo");
make_Sandwich("Ham", "Cheese");
make_Sandwich("Veggie Patty", "Avocado", "Sprouts", "Hummus", "Pickles");
