import React, { useEffect } from 'react';

export function useHandleClickOutside() {
  let refsArray = [...arguments];
  let newRefsArray = refsArray.slice(0, refsArray.length - 1);
  let fn = arguments[arguments.length - 1];

  useEffect(() => {
    function handleClickOutside(event) {
      const bool = newRefsArray.every(
        (ref) => ref.current && !ref.current.contains(event.target)
      );
      if (bool) {
        fn(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
}
