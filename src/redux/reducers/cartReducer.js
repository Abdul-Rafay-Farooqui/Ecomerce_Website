// src/reducers/cartReducer.js
const initialState = {
  items: [],
  total: 0,
  shipping : 0,
  discount : 0,
  tax : 0
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = action.payload;
      const itemIndex = state.items.findIndex(cartItem => cartItem.id === newItem.id);
      
      if (itemIndex >= 0) {
        const updatedItems = [...state.items];
        const updatedItem = {
          ...updatedItems[itemIndex],
          quantity: updatedItems[itemIndex].quantity + 1,
          total_item_price: (updatedItems[itemIndex].quantity + 1) * updatedItems[itemIndex].price
        };
        updatedItems[itemIndex] = updatedItem;

        return {
          ...state,
          items: updatedItems,
          total: state.total + updatedItem.price
        };
      } else {
        newItem.quantity = 1;
        newItem.total_item_price = newItem.quantity * newItem.price;

        return {
          ...state,
          items: [...state.items, newItem],
          total: state.total + newItem.price
        };
      }

      case 'REMOVE_FROM_CART':
        const removedItemId = action.payload;
        const removedItem = state.items.find(item => item.id === removedItemId);
      
        if (removedItem) {
          const updatedItems = state.items.filter(item => item.id !== removedItemId);
          const newTotal = state.total - removedItem.total_item_price;
      
          return {
            ...state,
            items: updatedItems,
            total: newTotal
          };
        }
        
        return state;
      
    case 'DEC_ITEM_QTY':
      {
        const itemIndex = state.items.findIndex(cartItem => cartItem.id === action.payload);
        
        if (itemIndex >= 0) {
          const updatedItems = [...state.items];
          const updatedItem = {
            ...updatedItems[itemIndex],
            quantity: updatedItems[itemIndex].quantity - 1,
            total_item_price: (updatedItems[itemIndex].quantity - 1) * updatedItems[itemIndex].price
          };
          updatedItems[itemIndex] = updatedItem;

          return {
            ...state,
            items: updatedItems,
            total: state.total - updatedItem.price
          };
        }
        
        return state;
      }
      case 'EMPTY_CART':
        console.log("Placing Order")
        return {
          ...state,
          items: [],
          total: 0,
          shipping : 0,
          discount : 0,
          tax : 0
        };
    default:
      return state;
  }
};

export default cartReducer;
