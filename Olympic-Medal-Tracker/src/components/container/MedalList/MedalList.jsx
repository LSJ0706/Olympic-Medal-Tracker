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
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {medalUI.map((v, idx) => (
              <tr key={idx}>
                <td>{v.country}</td>
                <td>{v.gold}</td>
                <td>{v.silver}</td>
                <td>{v.bronze}</td>
                <td>
                  <button onClick={() => handleDelete(v.country)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MedalList;
