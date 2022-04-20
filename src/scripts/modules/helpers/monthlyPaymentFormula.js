const monthlyPaymentFormula = (amountBorrowed, interestRate, loanTerm) => {
  const monthlyPaymentNum = loanTerm * 12;
  const rTo12 = (interestRate / 100) / 12;
  const formulaPart = Math.pow(1 + rTo12, monthlyPaymentNum);
  const monthlyPayment = (amountBorrowed * (rTo12 * formulaPart)) / (formulaPart - 1);

  return '$' + monthlyPayment.toFixed(2);
}

export default monthlyPaymentFormula;