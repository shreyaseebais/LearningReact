import { useRef } from "react";

function InputBox() {
  const inputRef = useRef(null);

  const inputHandler = () => {
    inputHandler.current.value = "hello ";
    inputHandler.current.focus();
    inputHandler.current.style.color = "red";
    inputHandler.current.placeholder = "Enter Password";
  };

  //tutorial #38 useRef()

  const toggleHandler = () => {
    if (inputRef.current.style.display != "none") {
      inputRef.current.style.display = "none";
    } else {
      inputRef.current.style.display = "inline";
    }
  };
  return (
    <div>
      <h3>Search box using useRef()</h3>
      <div>
        <button onClick={toggleHandler}>Toggle </button>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search with keywords"
        ></input>
        <button onClick={inputHandler}>Focus on input field</button>
      </div>
    </div>
  );
}

export default InputBox;
