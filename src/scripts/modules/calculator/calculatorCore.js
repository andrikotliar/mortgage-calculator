import setSelectedBank from "./setSelectedBank";
import monthlyPaymentFormula from "../helpers/monthlyPaymentFormula";
import calculatorValidation from "./calculatorValidation";
import calculatorInputError from "./calculatorInputError";
import setMinDownPayment from "../helpers/setMinDownPayment";
import setCalculatorNotation from "./setCalculatorNotation";

const calculatorCore = () => {
  let bankData = null;
  let initialLoan = null;
  let downPayment = null;
  let bankDownPaymentValue = null;

  const calculateButton = document.querySelector('#calculate');
  const choosedBankSelect = document.querySelector('#banksListSelect');
  const initialLoanInput = document.querySelector('#initialLoan');
  const downPaymentInput = document.querySelector('#downPayment');
  const resultBlock = document.querySelector('#result');

  choosedBankSelect.addEventListener('change', () => {
    const choosedBankID = +choosedBankSelect.value;

    initialLoanInput.value = "";
    downPaymentInput.value = "";
    calculatorInputError('');

    bankData = setSelectedBank(choosedBankID);
    setCalculatorNotation('#initialLoanNotation', bankData.maxLoan, 'Maximum loan: $');
    setCalculatorNotation('#downPaymentNotation');
  });

  initialLoanInput.addEventListener('blur', () => {
    initialLoan = +initialLoanInput.value;
    if(initialLoan) {
      bankDownPaymentValue = setMinDownPayment(initialLoan, bankData.minDownPayment);
      setCalculatorNotation('#downPaymentNotation', bankDownPaymentValue, 'Minimum down payment: $');
    }
  });

  calculateButton.addEventListener('click', () => {
    if(!bankData) {
      calculatorInputError('Choose a bank from the list!');
      return;
    }

    downPayment = +downPaymentInput.value;

    const isValide = calculatorValidation(
      bankData,
      initialLoan,
      downPayment,
      bankDownPaymentValue
    );

    if(isValide) {
      const amountBorrowed = initialLoan - downPayment;

      resultBlock.textContent = monthlyPaymentFormula(
        amountBorrowed,
        bankData.interestRate,
        bankData.loanTerm
      )
    }
  });

}

export default calculatorCore;