import React from 'react';
import './App.css';
import 'typeface-roboto';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon>star</Icon>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </header>
    </div>
  );
}

export default App;
