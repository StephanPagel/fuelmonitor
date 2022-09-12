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

document.querySelector("#calc-button").addEventListener("click", function () {
  const mileageStart = Number(
    document.querySelector("#input-mileage-start").value
  );
  const mileageEnd = Number(document.querySelector("#input-mileage-end").value);
  const fuelQuantity = Number(
    document.querySelector("#input-fuel-quantity").value
  );
  const fuelCosts = Number(document.querySelector("#input-fuel-costs").value);

  const distance = distanceDriven(mileageStart, mileageEnd);
  const avgConsumption = fuelConsumptionPer100Km(distance, fuelQuantity);
  const costsPerLiter = fuelCostsPerLiter(fuelCosts, fuelQuantity);
  const costsPerKm = fuelCostsPerKm(fuelCosts, distance);
  console.log(typeof costsPerKm, costsPerKm);
  console.log(typeof costsPerLiter, costsPerLiter);

  if (!mileageStart) {
    document.querySelector("#output-info").textContent =
      "Bitte trage einen Kilometerstand Start ein.";
  } else if (!mileageEnd) {
    document.querySelector("#output-info").textContent =
      "Bitte trage einen Kilometerstand Ende ein.";
  } else if (!fuelQuantity) {
    document.querySelector("#output-info").textContent =
      "Bitte trage eine Spritmenge ein.";
  } else if (!fuelCosts) {
    document.querySelector("#output-info").textContent =
      "Bitte trage deine Spritkosten ein.";
  } else {
    document.querySelector("#output-distance").textContent = distance;
    document.querySelector("#output-fuel-quantity").textContent = fuelQuantity;
    document.querySelector("#output-avg-consumption").textContent =
      avgConsumption;
    document.querySelector("#output-fuel-costs").textContent = fuelCosts;
    document.querySelector("#output-costs-per-liter").textContent =
      costsPerLiter;
    document.querySelector("#output-costs-per-km").textContent = costsPerKm;
  }
});

// const distance = distanceDriven(mileageStart, mileageEnd);
// const avgConsumption = fuelConsumptionPer100Km(distance, fuelQuantity);
// const costsPerLiter = fuelCostsPerLiter(fuelCosts, fuelQuantity);
// const costsPerKm = fuelCostsPerKm(fuelCosts, distance);

// console.log(
//   `Sie haben auf einer Strecke von ${distance} Kilometern ${avgConsumption} Liter Sprit verbraucht. \n Dies entspricht einem Durchschnittsverbrauch von ${avgConsumption} Litern auf 100 Kilometern. \n Für einen Liter Kraftstoff haben Sie ${costsPerLiter} € bezahlt. \n Für jeden gefahrenen Kilometer entstehen Ihnen Kosten in Höhe von ${costsPerKm} €.`
// );
