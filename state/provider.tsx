import React, { Context, createContext, useReducer } from "react";
import { store, AppReducer, initialState } from "./store";
const { Provider } = store;

const StateProvider = ({ children }: { children: any }) => {
  console.log("StateProvider run", store.Provider);
  const [state, dispatch] = useReducer(AppReducer, initialState);
  console.log("init", state, dispatch);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { StateProvider };
