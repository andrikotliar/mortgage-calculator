import renderBanks from "../banks/renderBanks";

const updateStorage = (banks) => {
  localStorage.banks = JSON.stringify(banks);
  renderBanks('.banks-list');
}

export default updateStorage;