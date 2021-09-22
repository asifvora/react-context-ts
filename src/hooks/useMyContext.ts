import { useContext } from "react";
import { store } from "../context";

export const useMyContext = () => {
  const globalState = useContext<any>(store);
  const { dispatch, state } = globalState;

  return { state, dispatch };
};
