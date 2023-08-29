// src/reducers/cartActions.js
export const addToCart = item => ({
    type: 'ADD_TO_CART',
    payload: item
  });
  
  export const removeFromCart = item=> ({
    type: 'REMOVE_FROM_CART',
    payload: item
  });
  
  export const incQty = item => ({
    type: 'INC_ITEM_QTY',
    payload: item
  });
  
  export const decQty = item => ({
    type: 'DEC_ITEM_QTY',
    payload: item
  });

  export const empty=() => ({
    type: 'EMPTY_CART'
  }) 