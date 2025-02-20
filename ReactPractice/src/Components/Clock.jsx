import { useEffect, useState } from "react";

const Clock = () => {
  const  [time, setTime ] = useState(0);

  useEffect(() => {
    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);


  return (
    <div>
      Clock component
      <h3> {time} </h3>
    </div>
  );
};

export default Clock;
