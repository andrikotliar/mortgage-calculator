const setCalculatorNotation = (notationID, value, title) => {
  const notationElem = document.querySelector(notationID);
  if(value) {
    notationElem.textContent = title + ' ' + value;
    notationElem.style.display = 'block';
  } else {
    notationElem.style.display = 'none';
  }
}

export default setCalculatorNotation;