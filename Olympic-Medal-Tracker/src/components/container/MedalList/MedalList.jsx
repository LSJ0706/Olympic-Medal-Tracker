import { useState, useEffect } from "react";
import Button from "../../presentational/Button.jsx";
import { sortMedalScore } from "../../../utils/medal.js";
const MedalList = ({ medalList, deleteMedal }) => {
  // medalList를 나타내주는 state
  const [medalUI, setMedalUI] = useState([]);
  // 정렬 타입을 나타내주는 state
  const [sortType, setSortType] = useState("default");

  // medalList와 sortType의 변화가 일어날 때마다 medalUI를 변화시켜 MedalList를 리렌더링
  useEffect(() => {
    let sortedList = [...medalList];
    if (sortType === "total") {
      sortedList = sortMedalScore(sortedList);
    } else {
      sortedList = sortedList.sort((a, b) => b.gold - a.gold);
    }
    setMedalUI(sortedList);
  }, [medalList, sortType]);

  // 해당 국가의 medal 정보 삭제 함수
  const handleDelete = (country) => {
    deleteMedal(country);
  };
  // 국가 정렬 기준을 금메달, 총 메달순으로 바꿔주는 함수
  const handleSort = () => {
    setSortType((prev) => (prev === "total" ? "default" : "total"));
  };

  return (
    <div>
      <Button
        // sortType에 따라서 버튼 이름을 바꿔줌
        name={`${sortType === "default" ? "총 메달 순" : "금메달 순"}`}
        HandleClick={handleSort}
      />
      {/*medalList의 길이에 따라서 화면을 다르게 보여줌*/}
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
            {/*medalUI를 map 함수를 이용하여 idx를 key로 jsx를 생성*/}
            {medalUI.map((v, idx) => (
              <tr key={idx}>
                <td>{v.country}</td>
                <td>{v.gold}</td>
                <td>{v.silver}</td>
                <td>{v.bronze}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(v.country)}
                  >
                    삭제
                  </button>
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
