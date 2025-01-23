import { validateAdd, validateUpdate } from "./validate.js";
import { updateMedalListToStorage } from "./storage.js";

const addMedal = (medalList, newMedal) => {
  if (!validateAdd(medalList, newMedal.country)) {
    alert("이미 존재하는 국가입니다!");
    return medalList;
  }
  const newList = [...medalList, newMedal].sort(
    (a, b) => Number(b.gold) - Number(a.gold)
  );
  updateMedalListToStorage(newList);
  return newList;
};

const updateMedal = (medalList, updatedMedal) => {
  if (!validateUpdate(medalList, updatedMedal.country)) {
    alert("아직 추가되지 않은 국가입니다. 먼저 추가해주세요!");
    return medalList;
  }
  const updateList = medalList.map((medal) =>
    medal.country === updatedMedal.country ? updatedMedal : medal
  );
  updateMedalListToStorage(updateList);
  return updateList;
};

const deleteMedal = (medalList, country) => {
  const filterList = medalList.filter((medal) => medal.country !== country);
  updateMedalListToStorage(filterList);
  return filterList;
};

const sortMedalScore = (medalList) => {
  return medalList.sort((a, b) => {
    const aMedalScore = a.gold + a.silver + a.bronze;
    const bMedalScore = b.gold + b.silver + b.bronze;
    return bMedalScore - aMedalScore;
  });
};
export { addMedal, updateMedal, deleteMedal, sortMedalScore };
