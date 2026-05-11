import { useCallback, useState } from 'react';

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((current) => !current), []);
  return { state, toggle, setState };
}

export default useToggle;
