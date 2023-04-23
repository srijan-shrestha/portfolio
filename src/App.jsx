import './App.scss'
import Topbar from './components/Topbar/Topbar';
import Main from './components/Main/Main';
import React from 'react';


function App() {
  return (
    <div className='app'>
      <Topbar />
      <Main />
    </div>
  );
}

export default App;
