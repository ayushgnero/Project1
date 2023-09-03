// reducers/index.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer'; // Import your reducers here

const rootReducer = combineReducers({
  cart: cartReducer, // Add more reducers here if needed
});

export default rootReducer;
