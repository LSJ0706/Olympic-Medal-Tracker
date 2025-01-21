import Button from "./Button";
const MedalList = ({ medalList, deleteMedal }) => {
  const handleDelete = (country) => {
    deleteMedal(country);
  };
  return (
    <div>
      {medalList.length === 0 ? (
        <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
      ) : (
        medalList.map((v, idx) => (
          <div key={idx}>
            <div>{v.country}</div>
            <div>{v.gold}</div>
            <div>{v.silver}</div>
            <div>{v.bronze}</div>
            <Button name="삭제" HandleClick={() => handleDelete(v.country)} />
          </div>
        ))
      )}
    </div>
  );
};

export default MedalList;
