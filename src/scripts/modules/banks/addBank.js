const addBank = (addButtonElem, modal) => {
  const addButton = document.querySelector(addButtonElem);
  addButton.addEventListener('click', () => {
   modal.openModal();
  })
}

export default addBank;