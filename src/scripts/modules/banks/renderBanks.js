import { bankParams } from "../../../data/bankParams";
import renderBankRows from "./renderBankRows";
import renderBankSettings from "./renderBankSettings";

const renderBanks = (banksListElem) => {
  const banks = JSON.parse(localStorage.banks);
  const banksList = document.querySelector(banksListElem);
  const settingsIcon = new URL('../../../images/icons/settings.svg', import.meta.url);

  banksList.textContent = "";

  for(let bank of banks) {
    const root = document.createElement('div');
    const title = document.createElement('h2');
    const paramsContainer = document.createElement('div');
    const settingsButton = document.createElement('button');
    const settingsButtonIcon = document.createElement('img');

    root.classList.add('bank');
    title.classList.add('bank__title');
    paramsContainer.classList.add('bank__params');
    settingsButton.classList.add('bank__settings-button');

    settingsButtonIcon.setAttribute('src', settingsIcon);
    settingsButton.append(settingsButtonIcon);

    title.textContent = bank.title;

    root.append(title);
    root.append(paramsContainer);
    root.append(settingsButton);

    renderBankRows(bank, bankParams, paramsContainer);
    renderBankSettings(bank.id, root);

    banksList.append(root);
  }
}

export default renderBanks;