import Child2 from "./2_Child";
import { useRef } from "react";


// tutorial #40 correct this. 
function Parent2() {
  const inputRef = useRef(null);
  const updateInput = () => {
    inputRef.current.value = 1000;
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  };
  return (
    <div style={{ border: "2px solid orange", padding: "10px" }}>
      <p>forwardRef is a utility function provided by React that allows you to pass a ref from a parent component to a child component. </p>
      <p>By default, React does not automatically pass ref to child components. Using forwardRef, you can explicitly forward the ref to a specific DOM node or child component.</p>
      <Child2 ref={inputRef}></Child2>
      <button onClick={updateInput}> Update input field </button>
    </div>
  );
}

export default Parent2;
