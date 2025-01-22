import Button from "../Button/Button";
const MedalList = ({ medalList, deleteMedal }) => {
  const handleDelete = (country) => {
    deleteMedal(country);
  };
  return (
    <div>
      {medalList.length === 0 ? (
        <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
      ) : (
        medalList
          .sort((a, b) => Number(b.gold) - Number(a.gold))
          .map((v, idx) => (
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
