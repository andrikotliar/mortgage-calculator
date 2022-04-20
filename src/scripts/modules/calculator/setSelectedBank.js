const setSelectedBank = (id) => {
  const banks = JSON.parse(localStorage.banks);
  return banks.find(bank => bank.id === id);
}

export default setSelectedBank;