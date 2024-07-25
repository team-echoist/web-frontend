import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { SidebarState, createSidebarSlice } from './sidebarSlice';
import { UserState, createUserSlice } from './userSlice';

type StoreState = SidebarState & UserState;

export const useStore = create<StoreState>()(
  devtools((set, get, api) => ({
    ...createSidebarSlice(set, get, api),
    ...createUserSlice(set, get, api),
  }))
);

export default useStore;