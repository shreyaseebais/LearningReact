import Child1 from "./1_Child";
import { useRef } from "react";

function Parent1() {
  const displayName = (name) => {
    alert(name);
  };
  const getUser = () => {
    alert("get user function called ");
  };

  

  return (
    <div style={{ border: "2px solid orange", padding: "10px" }}>
      PARENT , calling child Passing getUser function from parent to child.
      <Child1 displayName={displayName} name="john" onClick={getUser}></Child1>
      <Child1 displayName={displayName} name="marie" getUser={getUser}></Child1>
      <Child1 displayName={displayName} name="kate" getUser={getUser}></Child1>
      <Child1 displayName={displayName} name="jack" getUser={getUser}></Child1>
      
    </div>
  );
}

export default Parent1;
