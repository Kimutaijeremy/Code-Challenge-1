function estimateTransactionFee(amountToSend) {
  // calculate 1.5% of the amount to send
  const percentageFee = amountToSend * 0.015;
  let transactionFee;

  // Apply fee limits 
  if (percentageFee < 10) {
    transactionFee = 10; // Minimum fee is KES 10
  } else if (percentageFee > 70) {
    transactionFee = 70; // Maximum fee is KES 70
  } else {
    transactionFee = percentageFee; // Otherwise, use the calculated percentage fee
  }
  // Calculate total amount to be debited (amount + fee)
  const totalDebited = amountToSend + transactionFee;

  // Print transaction details
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log("\nSend Money Securely!");
}

// Prompt the user for the amount they want to send
const userInput = prompt("Unatuma Ngapi? (KES):");
const amount = Number(userInput);

// Validate input to ensure it's a positive number
if (!isNaN(amount) && amount > 0) {
  estimateTransactionFee(amount);
} else {
  // If the input is not a valid number, display an error message
  console.log("Tafadhali ingiza kiasi sahihi cha pesa (valid amount).");
}
