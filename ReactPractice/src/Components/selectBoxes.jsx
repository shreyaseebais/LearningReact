import { useState } from "react";

function SelectBoxes() {
  const [skills, setSkills] = useState([]);
  const handleSkills = (event) => {
    console.log(event.target.value, "  ", event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills([...skills.filter((item) => item != event.target.value)]);
    }
  };

  return (
    <div>
      <h3>Select your skills</h3>

      <div style={{ padding: "2%" }}>
        <div>
          <input
            type="checkbox"
            id="php"
            value="PHP"
            onChange={handleSkills}
          ></input>
          <label htmlFor="php">PHP</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="js"
            value="JS"
            onChange={handleSkills}
          ></input>
          <label htmlFor="js">Javascript</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="java"
            value="Java"
            onChange={handleSkills}
          ></input>
          <label htmlFor="java">Java</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="sql"
            value="SQL"
            onChange={handleSkills}
          ></input>
          <label htmlFor="sql">SQL</label>
        </div>
      </div>
      <p>Selected Skills : {skills.toString()} </p>
    </div>
  );
}

export default SelectBoxes;
