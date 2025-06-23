import { create } from "zustand";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  setCount: (value: number) => void;
}

const useZustandStore = create<CounterState>(
  (set: (fn: (state: CounterState) => Partial<CounterState>) => void) => ({
    count: 0,
    increment: () => set((state: CounterState) => ({ count: state.count + 1 })),
    decrement: () => set((state: CounterState) => ({ count: state.count - 1 })),
    setCount: (value: number) => set(() => ({ count: value })),
  })
);

export default useZustandStore;
