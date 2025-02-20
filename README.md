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