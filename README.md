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


### question number 1 

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