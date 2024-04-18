import { create } from "zustand";

interface useCursorStoreProps {
  state: boolean;
  size: number;
  color: string;
  margin: { top: number; left: number };
  updateState: (newState: boolean) => void;
  updateSize: (newSize: number) => void;
  updateColor: (newColor: string) => void;
  updateMargin: (newMargin: { top: number; left: number }) => void;
}

const useCursorStore = create<useCursorStoreProps>((set) => ({
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
export type { useCursorStoreProps };
