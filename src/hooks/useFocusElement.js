import { useEffect } from 'react';

export function useFocusElement(el, endOfLine = false) {
  useEffect(() => {
    if (!el.current) return;
    el.current.focus();

    // Moving cursor to the end
    if (endOfLine) {
      el.current.selectionStart = el.current.value.length;
      el.current.selectionEnd = el.current.value.length;
    }
  }, [el, endOfLine]);
}
