import MedalInput from "../../presentational/MedalInput.jsx";
import Button from "../../presentational/Button.jsx";
import { validateCountry, validateNum } from "../../../utils/validate.js";
import { useState } from "react";
const MedalForm = ({ addMedal, updateMedal }) => {
  const [formData, setFormData] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "country" ? validateCountry(value) : validateNum(value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMedal(formData);
    resetForm();
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    updateMedal(formData);
    resetForm();
  };

  const resetForm = () => {
    setFormData({ country: "", gold: 0, silver: 0, bronze: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <MedalInput
        title="국가"
        name="country"
        type="text"
        value={formData.country}
        onChange={handleChange}
        placeholder="국가 입력"
      ></MedalInput>

      <MedalInput
        title="금메달"
        name="gold"
        type="number"
        value={formData.gold}
        onChange={handleChange}
      ></MedalInput>

      <MedalInput
        title="은메달"
        name="silver"
        type="number"
        value={formData.silver}
        onChange={handleChange}
      ></MedalInput>

      <MedalInput
        title="동메달"
        name="bronze"
        type="number"
        value={formData.bronze}
        onChange={handleChange}
      ></MedalInput>

      <Button name="국가 입력" HandleClick={handleSubmit} />
      <Button name="업데이트" HandleClick={handleUpdate} />
    </form>
  );
};

export default MedalForm;
