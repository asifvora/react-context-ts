import React, { createContext, useReducer, useMemo } from "react";
import { InitialState, initialState, reducer } from "../reducers/index";

export interface IContextProps {
  state: InitialState;
  dispatch: ({ type }: { type: string }) => void;
}

export const store = createContext({} as IContextProps);
const { Provider } = store;

export const MyProvider: React.FC = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = useMemo(() => ({ state, dispatch }), [state])

  return <Provider value={store}>{children}</Provider>;
};
