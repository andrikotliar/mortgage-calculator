const openBankSettings = (bankSettingsButton) => {
  document.addEventListener('click', (event) => {
    if(event.target.closest(bankSettingsButton)) {
      const bank = event.target.closest('.bank');
      const bankSettings = bank.querySelector('.bank__settings');

      bankSettings.classList.toggle('settings-visible');
    }
  });
}

export default openBankSettings;