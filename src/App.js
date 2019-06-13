import React from 'react';
import Counter from './components/Counter';


const App = () => (
  <div>
    <h1>Counter Example</h1>
    <Counter name='red' />
    <Counter name='green'/>
    <Counter name='blue'/>
    <Counter name='purple'/>
  </div>
)

export default App;
