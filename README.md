# LearningReact

### Table of Contents

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



### What is Virtual DOM?

The Virtual DOM (VDOM) in React is a lightweight, in-memory representation of the actual DOM (Document Object Model). It helps improve the performance of React applications by minimizing direct manipulation of the real DOM, which is slow.
 
 
### How Virtual DOM Works in React
1 Render Phase

* React creates a Virtual DOM tree that mirrors the real DOM.
* When the state or props of a component change, React creates a new Virtual DOM instead of updating the real DOM directly.

2 Diffing Algorithm (Reconciliation)

* React compares the new Virtual DOM with the previous Virtual DOM to find the changes (this process is called reconciliation).
* React uses a highly optimized diffing algorithm to detect only the modified elements instead of re-rendering the entire UI.

3 Efficient Updates (Batching) 

* After finding the differences, React updates only the necessary parts of the real DOM using a process called DOM patching.
* React updates the UI in the most efficient way, leading to better performance.





### What is Babel?
Babel is a JavaScript compiler that converts modern JavaScript (ES6+) and JSX code into older JavaScript versions (ES5) so that browsers can understand and execute it.

### Why Do We Need Babel in React?
React uses JSX (JavaScript XML), which browsers do not understand natively. Babel transforms JSX into regular JavaScript before execution.


### Babel vs Webpack

|                    Feature	          |               Babel               |           	Webpack       |
|---------------------------------------|-----------------------------------|---------------------------|
| Converts modern JS (ES6+) to ES5      | ✅ Yes                            | ❌ No                    |
| Converts JSX to JS                    |	✅ Yes	                           | ❌ No                    |
| Bundles multiple JS files	            | ❌ No                             |	✅ Yes                  |
| Minifies and optimizes code	          | ❌ No                             |	✅ Yes                  |


### Write an increment counter

```javascript
    import React from 'react';
    import { useState } from 'react';

    export default function App() {
    const [count, setCount]= useState(0);
    return (
    <div>
    Count :  {count}
    <button type="submit" onClick={()=>setCount(count+1)}>Increment</button>
    </div>
    );
    }

```


### Call API


```javascript

    import React from 'react';
    import { useState, useEffect } from 'react';

    export default function App() {
    const [data, setData] = useState(0);

    useEffect(() => {
        fetch('https://cat-fact.herokuapp.com')
        .then((response) => {console.log(response)})
        .then((data) => setUsers(data));
    }, []);

    return (
        <div>
        <h1>Display data here : </h1>
        <div>{data}</div>
        </div>
    );
    }

```


### An example of useRef

```javascript

    import React from 'react';
    import { useRef } from 'react';

    export default function App() {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus(); // Direct DOM manipulation
    };

    return (
        <div>
        <input ref={inputRef} type="text"  />
        <button onClick={focusInput}>Focus Input</button>
        </div>
    );
    }

```


### Increment decrement using Reducer function 

```javascript

import React from 'react';
import { useReducer } from 'react';

// Initial state
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

```