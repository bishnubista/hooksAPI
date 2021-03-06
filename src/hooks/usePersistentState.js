import { useState, useEffect, useCallback } from 'react';

export function usePersistentState(key, defaultState = '') {
  const getLocalStorageValue = useCallback((key) => {
    const val = localStorage.getItem(key);
    if (!val) return null;
    try {
      return JSON.parse(val);
    } catch {
      return null;
    }
  }, []);

  const [state, setState] = useState(getLocalStorageValue(key) || defaultState);

  const setLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.warn('storage not working');
    }
  };

  useEffect(() => {
    setLocalStorage(key, state);
  }, [state, key]);

  return [state, setState];
}
