import { create } from 'zustand';

interface ModeStore {
  isArtMode: boolean;
  setIsArtMode: () => void;
}

export const modeStore = create<ModeStore>((set) => ({
  isArtMode: false,
  setIsArtMode: () => set((state) => ({ isArtMode: !state.isArtMode })),
}));

interface MenuStore {
  isMenuOpen: boolean;
  setIsMenuOpen: () => void;
}

export const menuStore = create<MenuStore>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

interface WorkCursorStore {
  isWorkCursor: boolean;
  setIsWorkCursor: (value: boolean) => void;
}

export const isWorkCursorStore = create<WorkCursorStore>((set) => ({
  isWorkCursor: false,
  setIsWorkCursor: (value) => set(() => ({ isWorkCursor: value })),
}));

interface DragCursorStore {
  isDragCursor: boolean;
  setIsDragCursor: (value: boolean) => void;
}

export const isDragCursorStore = create<DragCursorStore>((set) => ({
  isDragCursor: false,
  setIsDragCursor: (value) => set(() => ({ isDragCursor: value })),
}));

/* interface InitialMousePosition {
  initialMouseX: number | null,
  initialMouseY: number | null,
  // eslint-disable-next-line no-unused-vars
  setInitialMousePosition: (x: number | null, y: number | null) => void,
}

export const useInitialMousePosition = create<InitialMousePosition>((set) => ({
  initialMouseX: null,
  initialMouseY: null,
  setInitialMousePosition: (x, y) => set({ initialMouseX: x, initialMouseY: y }),
})); */