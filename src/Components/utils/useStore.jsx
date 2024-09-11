import {create} from 'zustand';

const useStore = create((set) => ({
  indexNum:[],
  clickedStates: [],
  clickCount: 0,
  initializeClickedStates: (length) =>
    set((state) => ({
      clickedStates: state.clickedStates.length
        ? state.clickedStates
        : Array(length).fill(false),
    })),

  toggleClickedState: (index) =>
    set((state) => {
      const indexNumber = [...state.indexNum,index];
      const updatedStates = [...state.clickedStates];
      const wasClicked = updatedStates[index];
      updatedStates[index] = !wasClicked;
      return {
        clickedStates: updatedStates,
        clickCount: wasClicked ? state.clickCount - 1 : state.clickCount + 1,
        indexNum: indexNumber,
      };
    }),

  incrementClickCount: () =>
    set((state) => ({ clickCount: state.clickCount + 1 })),

  decrementClickCount: () =>
    set((state) => ({ clickCount: state.clickCount - 1 })),
}));

export default useStore;
