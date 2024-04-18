import { create } from "zustand";

const useCursorStore = create((set) => ({
  state: false,
  size: 40,
  color: "#000",
  margin: { top: 0, left: 0 },

  updateState: (newState: boolean) => set({ state: newState }),
  updateSize: (newSize: number) => set({ size: newSize }),
  updateColor: (newColor: string) => set({ color: newColor }),
  updateMargin: (newMargin: { top: number; left: number }) =>
    set({ margin: newMargin }),
}));

export { useCursorStore };
