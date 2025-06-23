import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/config/configStore";
import { decrement, increment } from "../redux/modules/counter";

const RtkCounter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span> {count} </span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default RtkCounter;
