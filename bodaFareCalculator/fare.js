function calculateBodaFare() {
  const baseFare = 50;
  const chargePerKm = 15;

  // Prompt the user for the trip distance in kilometers
  const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
  // Convert the input to a number
  const distanceInKm = Number(input);

  // Calculate the cost baded on the distance traveled
  const tripCost = distanceInKm * chargePerKm;
  // Calculate the total fare by adding the base fare and trip cost
  const totalFare = baseFare + tripCost;

  // Output the trip details and fare breakdown to the console
  console.log(`Uko kwote? Io ni ${distanceInKm} km.`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${tripCost}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("Panda Pikipiki!");
}

calculateBodaFare();