const Button = ({ name, HandleClick }) => {
  return <button onClick={HandleClick}>{name}</button>;
};

export default Button;
