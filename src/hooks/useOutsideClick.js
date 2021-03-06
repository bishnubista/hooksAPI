import { useRef, useEffect } from 'react';

export function useOutsideClick(event, node, cb) {
  useEffect(() => {
    if (node.current && event.target.contains(node.current)) {
      if (typeof cb === 'function') {
        cb();
      }
    }
  }, [node, event, cb]);
}
