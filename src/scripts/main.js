import { Modal } from "./modules/classes/Modal";

import initStorage from "./modules/storage/initStorage";
import renderBanks from "./modules/banks/renderBanks";
import addBank from "./modules/banks/addBank";
import saveBank from "./modules/banks/saveBank";
import openBankSettings from "./modules/banks/openBankSettings";
import removeBank from "./modules/banks/removeBank";
import editBank from "./modules/banks/editBank";

let modal = new Modal('.modal');

initStorage();

renderBanks('.banks-list');
addBank('.add-bank', modal);
saveBank('.save-new-bank', modal);
openBankSettings('.bank__settings-button');
removeBank('.bank__delete-button');
editBank('.bank__edit-button', modal);