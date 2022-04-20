import fillModalWithData from "./fillModalWithData";

const editBank = (editButtonClass, modal) => {
  document.addEventListener('click', (event) => {
    const banks = JSON.parse(localStorage.banks);
    const clickedBtn = event.target.closest(editButtonClass);
    if(clickedBtn) {
      const idsList = [
        "title",
        "interestRate",
        "maxLoan",
        "minDownPayment",
        "loanTerm"
      ];

      const editedBank = banks.find(
        bank => bank.id === parseInt(clickedBtn.dataset.id)
      );

      fillModalWithData(idsList, editedBank);

      modal.openModal();
      modal.setSaveButtonAttr('data-id', editedBank.id);
    }
  });
}

export default editBank;