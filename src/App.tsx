import React from 'react';
import './App.css';
import { Header } from './common/components/header';
import { Dashboard } from './pages/dashboard';

function App() {
  return (
    <React.Fragment>
      <div className='app-container'>
        <Header />
        <Dashboard />
      </div>
    </React.Fragment>
  );
}

export default App;
