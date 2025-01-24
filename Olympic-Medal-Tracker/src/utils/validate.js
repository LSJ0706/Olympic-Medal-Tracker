const regexCountry = /[^ㄱ-ㅎ|가-힣\s]/g;
const regexNum = /^0+|[^0-9]/g;

// 국가 이름 중복 검사 함수
const validateAdd = (medalList, country) => {
  if (medalList.some((medal) => medal.country === country)) {
    return false;
  }
  return true;
};

// 국가 일치 검사 함수
const validateUpdate = (medalList, country) => {
  if (!medalList.some((medal) => medal.country === country)) {
    return false;
  }
  return true;
};

// input 한글 지정 함수
const validateCountry = (value) => {
  return value.replace(regexCountry, "");
};

// input 숫자 지정 함수
const validateNum = (value) => {
  value = value.replace(regexNum, "");
  return value === "" ? "0" : value;
};
export { validateAdd, validateUpdate, validateCountry, validateNum };
