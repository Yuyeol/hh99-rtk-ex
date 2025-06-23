import React from "react";
import useCounterStore from "../store/counter";

const ZustandCounter: React.FC = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span> {count} </span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default ZustandCounter;
