import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import Transcation from './components/Transcation';
import AddTranscation from './components/AddTranscation';




import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpense/>
        <Transcation />
        <AddTranscation />

      </div>
    </div>
  );
}

export default App;
