import calculatorInputError from "./calculatorInputError";

const calculatorValidation = (bank, initialLoan, downPayment, bankDownPaymentValue) => {

  if(initialLoan == 0) {
    calculatorInputError('Fill initial loan');
    return;
  }

  if(downPayment == 0) {
    calculatorInputError('Fill down payment');
    return;
  }

  if(initialLoan > bank.maxLoan) {
    calculatorInputError(`Initial loan is bigger than ${bank.title} maximum loan`);
    return;
  }

  if(downPayment < bankDownPaymentValue) {
    calculatorInputError(`Down payment is less than ${bank.title} minimum dawn payment`);
    return;
  }

  if(initialLoan < downPayment) {
    calculatorInputError('Initial loan is less then down payment');
    return;
  }

  calculatorInputError('');
  return true;
}

export default calculatorValidation;