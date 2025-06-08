function estimateTransactionFee(amountToSend) {
  const percentageFee = amountToSend * 0.015;
  let transactionFee;

  // Apply fee limits
  if (percentageFee < 10) {
    transactionFee = 10;
  } else if (percentageFee > 70) {
    transactionFee = 70;
  } else {
    transactionFee = percentageFee;
  }

  const totalDebited = amountToSend + transactionFee;

  // Print output
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log("\nSend Money Securely!");
}

// Prompt the user for input
const userInput = prompt("Unatuma Ngapi? (KES):");
const amount = Number(userInput);

if (!isNaN(amount) && amount > 0) {
  estimateTransactionFee(amount);
} else {
  console.log("Tafadhali ingiza kiasi sahihi cha pesa (valid amount).");
}
