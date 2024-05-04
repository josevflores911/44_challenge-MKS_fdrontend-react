import { ActionTypes, Product } from "../interfaces/Product";

export const addItem = (itemContent: Product) => ({
    type: ActionTypes.ADD_ITEM,
    payload: {
      id: itemContent.id,
      content: itemContent,
    },
  });
  
  export const removeItem = (itemId: number) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: itemId,
});
  
