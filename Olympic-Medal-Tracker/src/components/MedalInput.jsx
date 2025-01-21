const MedalInput = ({ title, placeholder, name, type, value, onChange }) => {
  return (
    <div>
      <label>{title}</label>
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default MedalInput;
