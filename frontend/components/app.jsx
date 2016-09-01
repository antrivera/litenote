import React from 'react';
import WelcomeContainer from './welcome/welcome_container';

const App = ({children}) => (
  <div>
    <header>
      <h1> Litenote </h1>
      <WelcomeContainer />
    </header>
    {children}
  </div>
);

export default App;
