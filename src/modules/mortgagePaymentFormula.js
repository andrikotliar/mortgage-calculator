export const mortgagePaymentFormula = (amountBorrowed, interestRate, monthlyPaymentNum) => {

  const rTo12 = interestRate / 12;
  const formulaPart = Math.pow(1 + rTo12, monthlyPaymentNum);
  const monthlyPayment = (amountBorrowed * (rTo12 * formulaPart)) / (formulaPart - 1);

  return monthlyPayment;
}