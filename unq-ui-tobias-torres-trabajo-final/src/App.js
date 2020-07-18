import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Juego from './componentes/Juego';
import Jugador1 from './componentes/Jugador1';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component ={ Juego } />
      <Route exact path="/jugador1" component = {Jugador1}/>
      <Route path="*" render= {() => <h1>Not Found</h1>} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
