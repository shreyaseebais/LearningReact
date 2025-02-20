//forwardRef was till REact18
import { forwardRef } from "react";

const Child2= forwardRef((props, ref)=> {
  return (
    <div>
      Using forward ref :<input type="text" ref={ref}></input>
    </div>
  );
})

export default forwardRef(Child2);
// Below code for React19
// function Child2(props) {
//   return (
//     <div>
//       Using forward ref :<input type="text" ref={props.ref}></input>
//     </div>
//   );
// }

// export default Child2;
