const getMedalListFromStorage = () => {
  return JSON.parse(window.localStorage.getItem("medalList"));
};

const updateMedalListToStorage = (medalList) => {
  return window.localStorage.setItem("medalList", JSON.stringify(medalList));
};

export { getMedalListFromStorage, updateMedalListToStorage };
