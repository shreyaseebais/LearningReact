import { useState } from "react";

function RadioButtons() {
  const [gender, setGender] = useState("Female");

  return (
    <div>
      <h3>Radio buttons </h3>
      <input
        type="radio"
        name="gender"
        id="male"
        value={"Male"}
        checked={gender == "Male"}
        onChange={(event) => setGender(event.target.value)}
      />
      <label htmlFor="male">Male</label>

      <input
        type="radio"
        name="gender"
        id="female"
        value={"Female"}
        checked={gender == "Female"}
        onChange={(event) => setGender(event.target.value)}
      />
      <label htmlFor="female">Female</label>

      <p>Selected Gender: {gender}</p>
    </div>
  );
}

export default RadioButtons;
