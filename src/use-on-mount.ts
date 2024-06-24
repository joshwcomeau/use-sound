import { useEffect, EffectCallback, DependencyList } from 'react';

const useOnMount = (callback: EffectCallback, deps: DependencyList = []) => {
  useEffect(callback, deps);
};

export default useOnMount;
