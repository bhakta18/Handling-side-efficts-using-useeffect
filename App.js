import React from 'react';
import Posts from './Posts';
import MouseTracker from './MouseTracker';
import DynamicTitle from './DynamicTitle';

const App = () => {
  return (
    <div>
      <h1>React Hooks Examples</h1>
      <DynamicTitle />
      <MouseTracker />
      <Posts />
    </div>
  );
};

export default App;
