import { DependencyList } from 'react';
declare const useMount: (
  callback?: Function,
  deps?: DependencyList
) => {
  isMounted: boolean;
};
export default useMount;
