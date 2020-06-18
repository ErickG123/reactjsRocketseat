import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
    // BrowserRouter = Define que estamos utilizando as rotas através de um Browser
    // Switch = Permite que apenas uma rota seja chamada ao mesmo tempo
    // exact faz com que aquela path só seja chamado se exatamente igual
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;