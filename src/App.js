import './App.css';
import React from 'react';
import MainPage from './MainPage/MainPage';

function App() {
  return (
    <React.Fragment>
      <div 
      className="main-conatiner border p-3 mx-auto mt-5"
      style={{
        maxWidth:'90%'
      }}
      >
        <MainPage></MainPage>
      </div>
    </React.Fragment>
  );
}

export default App;
