import updateStorage from "../storage/updateStorage";

const removeBank = (buttonClass) => {
  document.addEventListener('click', (event) => {
    const banks = JSON.parse(localStorage.banks);
    const clickedBtn = event.target.closest(buttonClass);
    if(clickedBtn) {
      const bankID = clickedBtn.dataset.id;

      const updatedBanks = banks.filter(bank => bank.id !== parseInt(bankID));

      updateStorage(updatedBanks);
    }
  })
}

export default removeBank;