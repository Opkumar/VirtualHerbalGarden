import {create} from 'zustand';

const useStore = create((set) => ({
  indexNum:[],
  clickedStates: [],
  clickCount: 0,
  deleteFav:[],

  
  initializeClickedStates: (length) =>
    set((state) => ({
      clickedStates: state.clickedStates.length
        ? state.clickedStates
        : Array(length).fill(false),
    })),

  toggleClickedState: (index) =>
    set((state) => {
      const updatedStates = [...state.clickedStates];
      const wasClicked = updatedStates[index];
      updatedStates[index] = !wasClicked;
      return {
        clickedStates: updatedStates,
        clickCount: wasClicked ? state.clickCount - 1 : state.clickCount + 1,
        indexNum: updatedStates.map((updatedState,index)=> {
          if (updatedState == true) {
            let  value = index;
            return value
          }
          else{
            return null
          }
          })
      };
    }),

}));

export default useStore;
