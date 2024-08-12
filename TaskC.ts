// 100 Days Of Coding Challenge!

/** Question 45:
Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.*/

//-----------------------------------------------------------------------------------------------------------------------------------

// Define the Car interface
interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any; // Allow any additional properties
}

// Function to create a car object
function createCar(
  manufacturer: string,
  model: string,
  ...details: any[]
): Car {
  let car: Car = {
    manufacturer,
    model,
  };

  // Add any additional details to the car object
  details.forEach((detail) => {
    let [key, value] = detail;
    car[key] = value;
  });

  return car;
}

// Call the createCar function with required parameters and optional details
let carInfo = createCar(
  "Honda",
  "Accord",
  ["color", "Pearl White"],
  ["year", 2025],
  ["features", ["Sunroof", "Navigation"]]
);

// Print the car information
console.log(carInfo);
