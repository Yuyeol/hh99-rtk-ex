import React, { useState } from "react";
import useCounterStore from "../store/counter";

const ZustandCounter: React.FC = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const setCount = useCounterStore((state) => state.setCount);
  const [inputValue, setInputValue] = useState<number>(0);

  const handleSubmit = () => {
    setCount(inputValue);
    setInputValue(0);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span> {count} </span>
      <button onClick={increment}>+</button>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <button onClick={handleSubmit}>확인</button>
      </div>
    </div>
  );
};

export default ZustandCounter;
