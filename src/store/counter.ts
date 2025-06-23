import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  setCount: (value: number) => void;
}

const useCounterStore = create<CounterState>()(
  devtools(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      setCount: (value: number) => set(() => ({ count: value })),
    }),
    { name: "counter" }
  )
);

export default useCounterStore;
