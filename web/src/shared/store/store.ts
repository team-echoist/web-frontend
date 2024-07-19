import { create } from "zustand"

interface State {
    bears: number
    increasePopulation: () => void
    removeAllBears: () => void
}

// 상태 스토어 생성
const useStore = create<State>((set) => ({
    bears: 0,
    increasePopulation: () => set((state: State) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}))

export default useStore

//사이드바 전역 상태
interface SidebarState {
    open: boolean
    selectedItem: React.ReactNode | null
    toggleSidebar: () => void
    setSelectedItem: (item: React.ReactNode | null) => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
    open: false,
    selectedItem: null,
    toggleSidebar: () => set((state) => ({ open: !state.open })),
    setSelectedItem: (item) => set({ selectedItem: item }),
}))
