import saveEditedBank from "./saveEditedBank";
import updatedBanksList from "./updateBanksList";
import updateStorage from "../storage/updateStorage";
import validateParams from "../helpers/validateParams";

const saveBank = (saveBtnElem, modal) => {
  const saveBtn = document.querySelector(saveBtnElem);

  saveBtn.addEventListener('click', () => {
    const banks = JSON.parse(localStorage.banks);
    const idsList = [
      "title",
      "interestRate",
      "maxLoan",
      "minDownPayment",
      "loanTerm"
    ];

    if(saveBtn.hasAttribute('data-id')) {
      const id = saveBtn.dataset.id;
      saveEditedBank(idsList, id, banks);
    } else {
      updatedBanksList(banks);
    }

    const isValide = validateParams(idsList);

    if(isValide) {
      updateStorage(banks);
      modal.closeModal();
      modal.clearInputs();
      modal.removeSaveButtonAttr('data-id');
    }
  });
}

export default saveBank;