import { useState } from "react";

function DropdownBox() {
  const [city, setCity] = useState("mumbai");

  return (
    <div>
      <h3> Select city </h3>
      <select
        defaultValue={"mumbai"}
        onChange={(event) => setCity(event.target.value)}
      >
        <option value="delhi">Delhi</option>
        <option value="kolkata">Kolkata</option>
        <option value="mumbai">Mumbai</option>
        <option value="chennai">Chennai</option>
      </select>
      <p>Selected city is : {city}</p>
    </div>
  );
}

export default DropdownBox;
