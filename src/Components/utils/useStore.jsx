// useStore.js
import {create} from 'zustand';

const useStore = create((set) => ({
  clickCount: 0,
  incrementClickCount: () => set((state) => ({ clickCount: state.clickCount + 1 })),
  decrementClickCount: () => set((state) => ({ clickCount: state.clickCount - 1 })),
}));

export default useStore;
