const regexCountry = /[^ㄱ-ㅎ|가-힣\s]/g;
const regexNum = /^0+|[^0-9]/g;

const validateAdd = (medalList, country) => {
  if (medalList.some((medal) => medal.country === country)) {
    return false;
  }
  return true;
};
const validateUpdate = (medalList, country) => {
  if (!medalList.some((medal) => medal.country === country)) {
    return false;
  }
  return true;
};
const validateCountry = (value) => {
  return value.replace(regexCountry, "");
};
const validateNum = (value) => {
  value = value.replace(regexNum, "");
  return value === "" ? "0" : value;
};
export { validateAdd, validateUpdate, validateCountry, validateNum };
