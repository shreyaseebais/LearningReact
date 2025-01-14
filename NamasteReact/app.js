import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = (
    <h1 id="heading" className="head" tabIndex="1 ">
        Namaste React using JSX ! 
    </h1>
    )

// React component
const HeadingComponent = () => {
    <div id="container">
        <h1 className="heading">Namaste React component!</h1>
    </div>
}
console.log(jsxHeading)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);
