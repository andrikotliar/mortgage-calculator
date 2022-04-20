const setParamSuffix = (param) => {
  switch(param) {
    case "maxLoan":
      return "$";
    case "loanTerm":
      return "years";
    default:
      return "%";
  }
}

export default setParamSuffix;