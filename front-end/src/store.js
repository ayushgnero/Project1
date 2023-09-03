import { createStore, combineReducers } from 'redux';
import sliderReducer from './reducers/sliderReducer';
import cartReducer from './reducers/cartReducer'; // Import your sliderReducer
// Import other reducers if you have more

const initialState = {
  // Define your initial state here
  // Example:
  cartItems: [], // You can add more properties as needed
  // Add initial state for your sliders if needed
  slider: {
    adultsValue: 1,
    childrenValue: 0,
    insuranceAmount: 300000,
    insuranePeriod: 1,
    city: 1,
    sliderValues: [300000, 500000, 700000, 1000000, 1500000, 2000000, 2500000, 3000000, 4000000, 5000000, 6000000, 7500000],
    adultAges: [18],
    childAges: [1],
  },
};

const rootReducer = combineReducers({
  cart: cartReducer, // Add your cart reducer here if you have one
  slider: sliderReducer, // Add your slider reducer here
  // Add other reducers if needed
});

const store = createStore(rootReducer, initialState);

export default store;
