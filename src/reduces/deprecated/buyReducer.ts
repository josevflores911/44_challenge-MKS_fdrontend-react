import { ActionTypes, Product } from "../../interfaces/Product";


const initialState: Product[] = [];

const buyReducer = (state: Product[] = initialState, action: any): Product[] => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      
      return [...state, action.payload]; 
      
    case ActionTypes.REMOVE_ITEM:
      
      return state.filter((item) => item.id !== action.payload); 
    
    default:
      return state;
  }
};

export default buyReducer;
