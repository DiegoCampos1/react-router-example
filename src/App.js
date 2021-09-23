import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Details from './pages/Details';
import main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Switch>
          <Route exact path="/" component={ main } />
          <Route exact path="/details/:id" component={ Details } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

// TODO: npm i react-router-dom
// TODO: Criar Pagina Main
// TODO: Criar Rota para pagina main
// TODO: Criar Pagina Details
// TODO: Criar Rota para a Pagina de details
// TODO: Na pagina Main Fazer chamada na API conforme termo de pesquisa (Valor do Input)
// TODO: Na pagina Main Renderizar resposta da API e gerar Link dinamicamente para cada receita
// TODO: Atualizar Rota para a pagina de detalhes
// TODO: Na pagina de detalhes capturar o parametro pela rota e fazer uma chamada na API
// TODO: Na pagina de detalhes renderizar detalhes da receita
// TODO: Na pagina Main Criar uma logica para o Not Found
