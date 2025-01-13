const parent = 
React.createElement(
    "div",{id: "parent"}, 
    React.createElement(
        "div", {id: "child"},
        [
            React.createElement("h1", {}, "Hello World!"),
            React.createElement("h2", {}, "How are you!"),
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(parent)
root.render(parent);