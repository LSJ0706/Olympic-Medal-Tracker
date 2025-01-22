import { validateAdd, validateUpdate } from "./validate.js";
const addMedal = (medalList, newMedal) => {
  if (!validateAdd(medalList, newMedal.country)) {
    alert("이미 존재하는 국가입니다!");
    return medalList;
  }
  return [...medalList, newMedal];
};

const updateMedal = (medalList, updatedMedal) => {
  if (!validateUpdate(medalList, updatedMedal.country)) {
    alert("아직 추가되지 않은 국가입니다. 먼저 추가해주세요!");
    return medalList;
  }
  return medalList.map((medal) =>
    medal.country === updatedMedal.country ? updatedMedal : medal
  );
};

const deleteMedal = (medalList, country) =>
  medalList.filter((medal) => medal.country !== country);

export { addMedal, updateMedal, deleteMedal };
