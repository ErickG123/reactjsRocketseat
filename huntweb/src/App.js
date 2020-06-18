import React from 'react';
import Routes from './routes';
import Header from './components/Header';
import Main from './pages/main'
import api from './services/api'
import './styles.css';

// Armazena a aplicação
const App = () => (
  // Chamando os componentes importados
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;