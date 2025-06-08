function calculateBodaFare() {
  const baseFare = 50;
  const chargePerKm = 15;

  // Prompt the user for the distance
  const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
  const distanceInKm = Number(input);

  // Calculate the fare
  const tripCost = distanceInKm * chargePerKm;
  const totalFare = baseFare + tripCost;

  // Output the results
  console.log(Uko kwote? Io ni ${distanceInKm} km.);
  console.log(Ukikalia Pikipiki: KES ${baseFare});
  console.log(Mpaka Uko: KES ${tripCost});
  console.log(Total: KES ${totalFare});
  console.log("Panda Pikipiki!");
}

calculateBodaFare();