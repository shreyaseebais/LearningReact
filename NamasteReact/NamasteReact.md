# NamasteReact
### Akshay is a great teacher ! Much Much thanks to his clear concepts.


## Table of Contents

| No. | Questions                                                                                       |
| --- | ------------------------------------------------------------------------------------------------| 
| 1 | [](#)                                                                                             |
| 2 | [](#)                                                                                             |
| 3 | [](#)                                                                                             |
| 4 | [](#)                                                                                             |
| 5 | [](#)                                                                                             |
| 7 | [](#)                                                                                             |
| 8 | [](#)                                                                                             |
| 9 | [](#)                                                                                             |
| 10 | [](#)                                                                                            |


## How to make a JS project React project?

Import React CDN to your index.html

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

### What is CDN?

### What is CrossOrigin?

### Why these two links for CDN? Why not only one ?
* React works on Browsers as well as Mobile phones. React for Browsers, React Native, React 3D.
* File #1 is pure react code
* File #2 is bridge between React & Browsers to connect to DOM


## How would you render React from index.html?
```html
    <div id="root"></div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script>
        const heading = React.createElement("h1", {}, "Hello World from REACT !");

        const root = ReactDOM.createRoot(document.getElementById('root'));

        root.render(heading);
    </script>
```

1. You want to expose here <div id="root"></div>
2. Imported React CDNs
3. create an h1 element using React 
4. create root using ReactDOM
5. render the html element(step3) you have created to root(step4)



