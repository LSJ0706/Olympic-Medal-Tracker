import MedalForm from "./components/MedalForm/MedalForm.jsx";
import MedalList from "./components/MedalList/MedalList.jsx";
import { useState } from "react";
import "./styles/global.css";

function App() {
  const [medalList, setMedalList] = useState([]);

  const addMedal = (newMedal) => {
    setMedalList((prev) => [...prev, newMedal]);
  };

  const updateMedal = (updatedMedal) => {
    setMedalList((prev) =>
      prev.map((medal) =>
        medal.country === updatedMedal.country ? updatedMedal : medal
      )
    );
  };

  const deleteMedal = (country) => {
    setMedalList((prev) => prev.filter((medal) => medal.country !== country));
  };

  return (
    <>
      <div className="container">
        <header>
          <h2>2024 파리 올림픽</h2>
          <MedalForm addMedal={addMedal} updateMedal={updateMedal} />
        </header>
        <MedalList medalList={medalList} deleteMedal={deleteMedal} />
      </div>
    </>
  );
}

export default App;
