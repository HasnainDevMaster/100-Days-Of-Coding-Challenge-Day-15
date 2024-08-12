"use strict";
// 100 Days Of Coding Challenge!
// Function to create a car object
function createCar(manufacturer, model, ...details) {
    let car = {
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
let carInfo = createCar("Honda", "Accord", ["color", "Pearl White"], ["year", 2025], ["features", ["Sunroof", "Navigation"]]);
// Print the car information
console.log(carInfo);
