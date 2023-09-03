// reducers/cartReducer.js
const initialState = {
  cartItems: [], // Initialize an empty cart
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload], // Add the item to the cart
      };
      case 'REMOVE_FROM_CART':
        // Implement logic to remove items from the cart based on the index
        const updatedCartItems = [...state.cartItems];
        updatedCartItems.splice(action.payload, 1); // Remove item at the specified index
        return {
          ...state,
          cartItems: updatedCartItems,
        };
    // Other cart-related actions
    default:
      return state;
  }
};

export default cartReducer;
