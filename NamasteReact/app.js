import React from "react";
import ReactDOM from "react-dom/client";

const parent = 
React.createElement(
    "div",{id: "parent"}, 
    React.createElement(
        "div", {id: "child"},
        [
            React.createElement("h1", {}, "Hello World !"),
            React.createElement("h2", {}, "How are you ?"),
        ]
    )
);

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);