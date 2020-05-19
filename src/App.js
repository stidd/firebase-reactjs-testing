import React from 'react';
import firebase from './firebase';
import './App.css';

import TimesList from './components/TimesList';
import AddTimeEntry from './components/AddTimeEntry';



function App() {
  return (
    <div className="App">
      <h1>FireBase Firestore data testing ☕</h1>
      <TimesList />
      <AddTimeEntry />
    </div>
  );
}

export default App;
