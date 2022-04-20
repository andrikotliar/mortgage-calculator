const calculatorInputError = (message) => {
  const calculatorError = document.querySelector('.calculator__error');
  calculatorError.style.display = 'block';
  calculatorError.textContent = message;

  if(message == "") {
    calculatorError.style.display = 'none';
  }
}

export default calculatorInputError;