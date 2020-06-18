// Importando o axios para controle de API
import axios from 'axios';

// Definindo a URL base da api
const api = axios.create({
    baseURL: 'http://localhost:3001/api'
});

// Exportando a API
export default api;