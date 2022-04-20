const renderBanksSelect = (banks, selectID) => {
  const select = document.querySelector(selectID);
  for(let bank of banks) {
    const option = document.createElement('option');
    option.value = bank.id;
    option.textContent = bank.title;

    select.append(option);
  }
}

export default renderBanksSelect;