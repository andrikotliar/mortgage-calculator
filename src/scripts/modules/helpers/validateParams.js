const validateParams = (params) => {
  for(let param of params) {
    const elemId = '#' + param;
    const input = document.querySelector(elemId);
    if(input.value != "") {
      if(input.classList.contains('error')) {
        input.classList.remove('error');
      }
      continue;
    }
    input.focus();
    input.classList.add('error');
    return false;
  }
  return true;
}

export default validateParams;