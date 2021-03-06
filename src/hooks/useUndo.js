import { useState, useRef } from 'react';

export function useUndo([state, setState]) {
  const historyRef = useRef([state]);
  const [index, setIndex] = useState(0);

  const onUndo = () => {
    setIndex(Math.max(0, index - 1));
  };

  const onRedo = () => {
    setIndex(Math.min(historyRef.current.length - 1, index + 1));
  };

  const newSetState = (nextState) => {
    const nextIndex = index + 1;
    historyRef.current[nextIndex] = nextState;
    setIndex(nextIndex);
    setState(nextState);
  };

  return [historyRef.current[index], newSetState, onUndo, onRedo];
}
