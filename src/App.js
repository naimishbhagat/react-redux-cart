import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// reducer - function that used to update store
// store - stores data, think of state
// two arguments - state, action
// state - old state/state before update
// action - what happened /what update
// return updated or old state

//dispatch method - send actions to the store
//actions (objects) - MUST HAVE TYPE PROPERTY - what kind of action
// Don't Mutate the state - redux built on IMMUTABILITY (copy)
import { createStore } from "redux";
import { reducer } from "./reducer";
// react-redux - Provider - wraps app, connect -used in components
import { Provider } from "react-redux";

const initialStore = {
  cart: cartItems,
  total: 10,
  amount: 5,
};

const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
