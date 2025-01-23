import { useState, useEffect } from "react";
import Button from "../../presentational/Button.jsx";
import { sortMedalScore } from "../../../utils/medal.js";
const MedalList = ({ medalList, deleteMedal }) => {
  const [medalUI, setMedalUI] = useState([]);
  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    let sortedList = [...medalList];
    if (sortType === "total") {
      sortedList = sortMedalScore(sortedList);
    } else {
      sortedList = sortedList.sort((a, b) => b.gold - a.gold);
    }
    setMedalUI(sortedList);
  }, [medalList, sortType]);

  const handleDelete = (country) => {
    deleteMedal(country);
  };
  const handleSort = () => {
    setSortType((prev) => (prev === "total" ? "default" : "total"));
  };
  return (
    <div>
      <Button
        name={`${sortType === "default" ? "총 메달 순" : "금메달 순"}`}
        HandleClick={handleSort}
      />
      {medalUI.length === 0 ? (
        <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
      ) : (
        medalUI.map((v, idx) => (
          <div key={idx}>
            <div>{v.country}</div>
            <div>금메달: {v.gold}개</div>
            <div>은메달: {v.silver}개</div>
            <div>동메달: {v.bronze}개</div>
            <Button name="삭제" HandleClick={() => handleDelete(v.country)} />
          </div>
        ))
      )}
    </div>
  );
};

export default MedalList;
