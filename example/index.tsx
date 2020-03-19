import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import useSound from '../.';

import boop from './boop.mp3';

const App = () => {
  const [playSound] = useSound(boop);

  return (
    <div>
      <button onClick={() => playSound()}>Play</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
