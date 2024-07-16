// store.js
import { createStore, combineReducers } from "redux";

// Define your initial state and reducers here
const initialState = {
  user: null,
  doctors: [],
  appointments: [],
};

const rootReducer = combineReducers({
  // your reducers
});

const store = createStore(rootReducer);

export default store;
