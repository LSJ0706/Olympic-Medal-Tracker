import MedalForm from "./components/MedalForm/MedalForm.jsx";
import MedalList from "./components/MedalList/MedalList.jsx";
import { addMedal, updateMedal, deleteMedal } from "./utils/utils.js";
import { useState } from "react";
import "./styles/global.css";

function App() {
  const [medalList, setMedalList] = useState([]);

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
