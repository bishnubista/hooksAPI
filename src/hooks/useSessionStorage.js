import { useState, useEffect, useCallback } from 'react';

export function useSessionStorage(key, initialValue = '') {
  const getSessionStorage = useCallback(
    (key) => {
      try {
        let value = '';
        if (typeof window !== undefined) {
          value = window.sessionStorage.getItem(key);
        }
        return value ? JSON.parse(value) : initialValue;
      } catch {
        return initialValue;
      }
    },
    [initialValue]
  );

  const setSessionStorage = (key, value) => {
    try {
      window && window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.warn('session not working');
    }
  };

  const [sessionValue, setsessionValue] = useState(initialValue);

  useEffect(() => {
    getSessionStorage(key);
  }, [getSessionStorage, key]);

  useEffect(() => {
    const storedValue = getSessionStorage(key);
    setsessionValue(storedValue);
  }, [getSessionStorage, key]);

  return [sessionValue, setSessionStorage];
}
