import * as types from "../actions/types";

export interface InitialState {
  counter: number;
};

export const initialState: InitialState = {
  counter: 0,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.INCRIMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case types.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};