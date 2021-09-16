import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Details from './pages/Details';
import main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ main } />
        <Route exact path="/details/:id" component={ Details } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
