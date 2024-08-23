import React from 'react';
import Navbar from './containers/Navbar';
import { defaultConfig } from './utils/navbar-config';

function App() {
  return <Navbar config={defaultConfig} />;
}

export default App;
