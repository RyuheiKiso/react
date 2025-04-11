import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomButton from './shared/components/button';
import CustomTextField from './shared/components/textbox';

function App() {
  return (
    <div className="App">
      <CustomButton label={'いいいいい'} triggerKey='F1' onClick={() => console.log('ボタンがクリックされました')} />
      <CustomTextField placeholder={'あああああ'} />
    </div>
  );
}

export default App;
