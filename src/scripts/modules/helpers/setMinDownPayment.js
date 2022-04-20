const setMinDownPayment = (initialLoan, minDownPayment) => {
  return initialLoan * (minDownPayment / 100);
}

export default setMinDownPayment;