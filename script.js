"use strict";

const distanceDriven = (mileageStart, mileageEnd) => {
  return mileageEnd - mileageStart;
};

const fuelConsumptionPer100Km = (distanceDriven, fuelQuantity) => {
  return ((fuelQuantity * 100) / distanceDriven).toFixed(2);
};

const fuelCostsPerLiter = (price, fuelQuantity) => {
  return (price / fuelQuantity).toFixed(2);
};

const fuelCostsPerKm = (fuelCosts, distanceDriven) => {
  return (fuelCosts / distanceDriven).toFixed(2);
};

const mileageStart = 0;
const mileageEnd = 600;
const fuelQuantity = 35;
const fuelCosts = 65;

const distance = distanceDriven(mileageStart, mileageEnd);
const avgConsumption = fuelConsumptionPer100Km(distance, fuelQuantity);
const costsPerLiter = fuelCostsPerLiter(fuelCosts, fuelQuantity);
const costsPerKm = fuelCostsPerKm(fuelCosts, distance);

console.log(
  `Sie haben auf einer Strecke von ${distance} Kilometern ${avgConsumption} Liter Sprit verbraucht. \n Dies entspricht einem Durchschnittsverbrauch von ${avgConsumption} Litern auf 100 Kilometern. \n Für einen Liter Kraftstoff haben Sie ${costsPerLiter} € bezahlt. \n Für jeden gefahrenen Kilometer entstehen Ihnen Kosten in Höhe von ${costsPerKm} €.`
);
