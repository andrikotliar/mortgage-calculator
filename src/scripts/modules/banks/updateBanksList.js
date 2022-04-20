import generateUnicalID from "../helpers/generateUnicalID";

const updatedBanksList = (banks) => {
  const bankTitle = document.querySelector('#title');
  const interestRate = document.querySelector('#interestRate');
  const maxLoan = document.querySelector('#maxLoan');
  const minDownPayment = document.querySelector('#minDownPayment');
  const loanTerm = document.querySelector('#loanTerm');

  banks.push({
    id: generateUnicalID(),
    title: bankTitle.value,
    interestRate: +interestRate.value,
    maxLoan: +maxLoan.value,
    minDownPayment: +minDownPayment.value,
    loanTerm: +loanTerm.value
  });
}

export default updatedBanksList;