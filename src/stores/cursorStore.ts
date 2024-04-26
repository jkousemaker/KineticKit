import { create } from "zustand";

interface useCursorStoreProps {
  state: boolean;
  variant: "Default" | "Link" | "Hover" | "Custom";
  size: number;
  color: string;
  margin: { top: number; left: number };
  updateState: (newState: boolean) => void;
  updateVariant: (newVariant: "Default" | "Link" | "Hover" | "Custom") => void;
  updateSize: (newSize: number) => void;
  updateColor: (newColor: string) => void;
  updateMargin: (newMargin: { top: number; left: number }) => void;
}

const useCursorStore = create<useCursorStoreProps>((set) => ({
  state: true,
  variant: "Default",
  size: 20,
  color: "#fff",
  margin: { top: -10, left: -10 },

  updateState: (newState: boolean) => set({ state: newState }),
  updateVariant: (newVariant: "Default" | "Link" | "Hover" | "Custom") =>
    set({ variant: newVariant }),
  updateSize: (newSize: number) => set({ size: newSize }),
  updateColor: (newColor: string) => set({ color: newColor }),
  updateMargin: (newMargin: { top: number; left: number }) =>
    set({ margin: newMargin }),
}));

export { useCursorStore };
export type { useCursorStoreProps };
