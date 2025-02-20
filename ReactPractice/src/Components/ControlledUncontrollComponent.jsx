// A controlled component is a form element (e.g., input, textarea, select) whose value is controlled by React's state.

// An uncontrolled component is a form element that maintains its own internal state.
// React does not directly control the form input's value.
// Instead, you access the current value via a ref.

import { useState, useRef } from "react";

function ControlledUncontrollComponent() {
  const userRef = useRef();
  const passwordRef = useRef();

  //uncontrolled Using DOM 
  const handleForm = (event) => {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    console.log("User, pwd : ", user, " ", password);
  };

  //controlled 
  const handleFormRef = (event) => {
    event.preventDefault();
    const user = userRef.current.value;
    const password = passwordRef.current.value;
    console.log("User, pwd : ", user, " ", password);
  };
  return (
    <div>
      <h2>ControlledUncontrollComponent components</h2>
      <div>
        {/* //Controlled component */}
        <h3>Controlled component</h3>
        <form action="" method="post" onSubmit={handleForm}>
          <input type="text" id="user" placeholder="Enter Username"></input>
          <br></br>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
          ></input>
          <br></br>
          <button>Submit</button>
        </form>

        {/* UnControlled component */}
        <h3>UnControlled component</h3>
        <form action="" method="post" onSubmit={handleFormRef}>
          <input
            type="text"
            ref={userRef}
            id="userRef"
            placeholder="Enter Username"
          ></input>
          <br></br>
          <input
            type="password"
            ref={passwordRef}
            id="passwordRef"
            placeholder="Enter Password"
          ></input>
          <br></br>
          <button>Submit with Ref</button>
        </form>
      </div>
    </div>
  );
}

export default ControlledUncontrollComponent;
