import { StateCreator } from "zustand";
export interface Device {
  uid: string;
  fcmToken: string;
  id: number;
  model: string;
  os: string;
  type: string;
}

export interface User {
  id: number;
  email: string;
  nickname: string;
  profileImage: string;
  createdDate: string;
  locationConsent: boolean;
  devices?: Device[];
}

export interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const createUserSlice: StateCreator<UserState> = (set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
});
