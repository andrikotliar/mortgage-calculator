const saveEditedBank = (idsList, id, banks) => {
  const editedBank = banks.find(
    bank => bank.id === parseInt(id)
  );

  for(let id of idsList) {
    const elemId = '#' + id;
    const paramInput = document.querySelector(elemId);

    editedBank[id] = paramInput.value;
  }
}

export default saveEditedBank;