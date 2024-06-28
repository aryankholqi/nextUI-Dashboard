import { create } from "zustand";

interface SidebarStore {
  isSidebarOpen: boolean;
  toggleSidebar: (value: boolean) => void;
  isSidebarExpanded: boolean;
  expandSidebarToggle: () => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: (value: boolean) => set(() => ({ isSidebarOpen: value })),
  isSidebarExpanded: false,
  expandSidebarToggle: () =>
    set((state) => ({ isSidebarExpanded: !state.isSidebarExpanded })),
}));