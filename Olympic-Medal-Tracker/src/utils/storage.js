// LocalsStorage 저장 함수
const getMedalListFromStorage = () => {
  return JSON.parse(window.localStorage.getItem("medalList"));
};
// LocalsStorage 업데이트 함수
const updateMedalListToStorage = (medalList) => {
  return window.localStorage.setItem("medalList", JSON.stringify(medalList));
};

export { getMedalListFromStorage, updateMedalListToStorage };
