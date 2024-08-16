import React from 'react';
import { FunctionalGreeting, ClassGreeting } from './Components';

function App() {
  return (
    <div>
      <FunctionalGreeting name="Alice" />
      <ClassGreeting name="Bob" />
    </div>
  );
}

export default App;
