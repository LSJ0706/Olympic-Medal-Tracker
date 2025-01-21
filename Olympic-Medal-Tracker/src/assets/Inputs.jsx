const Input = ({ name, type }) => {
  return (
    <div>
      <label>{name}</label>
      <input type={type}></input>
    </div>
  );
};

export default Input;
