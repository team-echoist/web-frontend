import { create } from "zustand";

interface State {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

// 상태 스토어 생성
const useStore = create<State>((set) => ({
  bears: 0,
  increasePopulation: () => set((state: State) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useStore;
