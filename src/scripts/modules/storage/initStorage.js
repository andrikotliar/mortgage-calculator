import { banks } from "../../../data/banks";

const initStorage = () => {
  if(!localStorage.banks) localStorage.banks = JSON.stringify(banks);
}

export default initStorage;