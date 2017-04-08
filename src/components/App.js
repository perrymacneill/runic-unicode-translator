import React from 'react';
import '../App.css';
import TranslationOutput from './TranslationOutput'
import TranslationInput from './TranslationInput'
import InputButtons from './InputButtons'

const App = () => (
  <div className="App">
    <TranslationInput />
    <InputButtons />
    <TranslationOutput />
  </div>
);

export default App;
