const fillModalWithData = (idsList, bank) => {

  for(let id of idsList) {
    const elemId = '#' + id;
    const paramInput = document.querySelector(elemId);

    paramInput.value = bank[id];
  }
}

export default fillModalWithData;