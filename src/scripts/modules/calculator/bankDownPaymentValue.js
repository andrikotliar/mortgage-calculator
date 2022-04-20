const bankDownPaymentValue = (initialLoan, minDownPayment) => {
  return initialLoan * (minDownPayment / 100);
}

export default bankDownPaymentValue;