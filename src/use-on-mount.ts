import * as React from 'react';

export default function useOnMount(callback: React.EffectCallback) {
  React.useEffect(callback, []);
}
