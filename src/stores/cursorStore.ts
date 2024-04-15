import { create } from "zustand";

const useCursorStore = create((set) => ({
  bears: 0,
  toggleInteracting: () =>
    set((state: { interacting: boolean }) => ({
      interacting: !state.interacting,
    })),
  removeAllBears: () => set({ interacting: false }),
}));
