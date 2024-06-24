import { DependencyList, useRef } from 'react';
import useOnMount from './use-on-mount';

const useMount = (callback: Function = () => {}, deps: DependencyList = []) => {
  // Ref to track component mount state
  const isMounted = useRef(false);

  useOnMount(() => {
    // Component has mounted, set the flag
    if (!isMounted.current) {
      isMounted.current = true;
      callback();
    }

    // Cleanup function to reset the flag when component unmounts
    return () => {
      isMounted.current = false;
    };
  }, deps);

  return { isMounted: isMounted.current };
};

export default useMount;
