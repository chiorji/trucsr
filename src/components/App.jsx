import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import LandingPage from './LandingPage'

const App = () => {
  return (
    <BrowserRouter>
      <LandingPage/>
    </BrowserRouter>
  );
}

export default App;
