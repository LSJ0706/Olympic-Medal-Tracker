import MedalForm from "./components/container/MedalForm/MedalForm.jsx";
import MedalList from "./components/container/MedalList/MedalList.jsx";
import { getMedalListFromStorage } from "./utils/storage.js";
import { addMedal, updateMedal, deleteMedal } from "./utils/medal.js";
import { useState } from "react";
import "./styles/global.css";
import "./styles/app.css";

function App() {
  // medalList LocalStorage Load 및 state 적용
  const medalLists = getMedalListFromStorage() || [];
  const [medalList, setMedalList] = useState(medalLists);

  // 생성, 업데이트 삭제 handle 함수
  const addHandle = (newMedal) => {
    setMedalList((prev) => addMedal(prev, newMedal));
  };
  const updateHandle = (updatedMedal) => {
    setMedalList((prev) => updateMedal(prev, updatedMedal));
  };
  const deleteHandle = (country) => {
    setMedalList((prev) => deleteMedal(prev, country));
  };

  return (
    <>
      <div className="container">
        <header>
          <h2>2024 파리 올림픽</h2>
          <MedalForm addMedal={addHandle} updateMedal={updateHandle} />
        </header>
        <MedalList medalList={medalList} deleteMedal={deleteHandle} />
      </div>
    </>
  );
}

export default App;
