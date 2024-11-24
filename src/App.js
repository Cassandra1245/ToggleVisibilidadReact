import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const mensaje = "Pulsa el boton de abajo para volverme invisible"
  const [situacion, setSituacion] = useState(true);

  function ocultar() {
    setSituacion(false);
  }

  function desocultar() {
    setSituacion(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {situacion && <p>{mensaje}</p>}
        <button onClick = {ocultar}>Pulsame para hacerme invisible</button>
        <button onClick = {desocultar}>Pulsame para hacerme visible</button>
      </header>
    </div>
  );
}

export default App;
