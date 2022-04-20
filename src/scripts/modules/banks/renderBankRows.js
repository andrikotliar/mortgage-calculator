import setParamSuffix from "../helpers/setParamSuffix";

const renderBankRows = (bank, bankParams, paramsContainer) => {
  for(let param of bankParams) {
    const row = document.createElement('div');
    const rowTitle = document.createElement('span');
    const rowValue = document.createElement('span');

    row.classList.add('bank__text-row');

    rowTitle.textContent = param.title;
    rowValue.textContent = `${bank[param.value]} ${setParamSuffix(param.value)}`;

    row.append(rowTitle, rowValue);

    paramsContainer.append(row);
  }
}

export default renderBankRows;