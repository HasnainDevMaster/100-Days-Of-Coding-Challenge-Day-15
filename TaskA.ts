// 100 Days Of Coding Challenge!

/** Question 43:
Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/

//--------------------------------------------------------------------------------------------------------------------------------------------------------

// An array of magicians' names
let magicians: string[] = [
  "David Copperfield",
  "Harry Houdini",
  "Penn Jillette",
];

// Define the make_great function
function make_great(names: string[]): string[] {
  // Create a copy of the input array
  let magicianNames: string[] = [...names];

  // For each magician, add "Great" to each magician's name
  for (let i = 0; i < magicianNames.length; i++) {
    magicianNames[i] = `Great ${magicianNames[i]}`;
  }

  // Return the new array
  return magicianNames;
}

// Call show_magicians with both arrays
function show_magicians(names: string[]) {
  console.log(names.join(", "));
}

const originalMagicians = magicians.slice(); // Create a copy of the original array
const greatMagicians = make_great(originalMagicians);

console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("Great Magicians:");
show_magicians(greatMagicians);
