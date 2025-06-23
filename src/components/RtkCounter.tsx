import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/config/configStore";
import { decrement, increment, setCount } from "../redux/modules/counter";

const RtkCounter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState<number>(0);

  const handleSubmit = () => {
    dispatch(setCount(inputValue));
    setInputValue(0);
  };

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span> {count} </span>
      <button onClick={() => dispatch(increment())}>+</button>
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

export default RtkCounter;
