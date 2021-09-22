import React, { memo, useCallback } from "react";
import { useMyContext } from "../../hooks/useMyContext";
import { incriment, decrement } from "../../actions";

export const Counter: React.FC = memo(() => {
  const {
    state: { counter },
    dispatch,
  } = useMyContext();

  const onIncriment = useCallback(() => {
    dispatch(incriment());
  }, [dispatch]);

  const onDecrement = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncriment}>+</button>
    </div>
  );
});
