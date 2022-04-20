import { banks } from "../../../data/banks";
import renderBanksSelect from "./renderBanksSelect";

const initBanksList = () => {
  let banksList = banks;
  if(localStorage.banks) {
    banksList = JSON.parse(localStorage.banks);
  }

  renderBanksSelect(banksList, '#banksListSelect');
}

export default initBanksList;