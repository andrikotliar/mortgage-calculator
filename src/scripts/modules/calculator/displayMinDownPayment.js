import setMinDownPayment from "./setMinDownPayment";

const displayMinDownPayment = (initialLoanInputId, minBankDownPaymentID, minDownPayment) => {
  const minBankDownPayment = document.querySelector(minBankDownPaymentID);
  const initialLoanInput = document.querySelector(initialLoanInputId);
  initialLoanInput.addEventListener('blur', () => {
    minBankDownPayment.textContent = setMinDownPayment(+initialLoanInput.value, minDownPayment);
  });
}

export default displayMinDownPayment;