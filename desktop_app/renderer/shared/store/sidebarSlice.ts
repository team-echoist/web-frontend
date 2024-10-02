import { StateCreator } from "zustand";

export interface SidebarState {
  open: boolean;
  selectedItem: React.ReactNode | null;
  toggleSidebar: () => void;
  setSelectedItem: (item: React.ReactNode | null) => void;
}

export const createSidebarSlice: StateCreator<
  SidebarState,
  [],
  [],
  SidebarState
> = (set) => ({
  open: false,
  selectedItem: null,
  toggleSidebar: () => set((state) => ({ open: !state.open })),
  setSelectedItem: (item) => set({ selectedItem: item }),
});


//   const { open, toggleSidebar, selectedItem, setSelectedItem } = useStore((state) => ({
//     open: state.open,
//     toggleSidebar: state.toggleSidebar,
//     selectedItem: state.selectedItem,
//     setSelectedItem: state.setSelectedItem,
//   }));
//사용예시