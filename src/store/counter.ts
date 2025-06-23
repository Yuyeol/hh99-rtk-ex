import { create } from "zustand";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useZustandStore = create<CounterState>(
  (set: (fn: (state: CounterState) => Partial<CounterState>) => void) => ({
    count: 0,
    increment: () => set((state: CounterState) => ({ count: state.count + 1 })),
    decrement: () => set((state: CounterState) => ({ count: state.count - 1 })),
  })
);

export default useZustandStore;
