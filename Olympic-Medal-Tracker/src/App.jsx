import Input from "./assets/Inputs.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <header>
          <h2>2024 파리 올림픽</h2>
          <form>
            <Input name="국가" type="text"></Input>
            <Input name="금메달" type="number"></Input>
            <Input name="은메달" type="number"></Input>
            <Input name="동메달" type="number"></Input>
            <button>국가 추가</button>
            <button>업데이트 </button>
          </form>
        </header>
        <main>아직 추가된 국가가 없습니다. 메달을 추적하세요!</main>
      </div>
    </>
  );
}

export default App;
