import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

// Criando a componente Main
export default class Main extends Component {
    // Armazenando os dados da api em variávies
    // Sempre que uma variável alterar o render() executa novamente com as alterações
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    // Executa assim que o componente é renderizando em tela
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        // Chamando a rota products para retornar os dados dos produtos
        const response = await api.get(`/products?page=${page}`);

        // Armazenando o resto das informações da API
        const { docs, ...productInfo } = response.data;

        // Armazenando as informações dos produtos
        this.setState({ products: docs, productInfo, page });
    };

    // Função de paginação 
    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;
        
        this.loadProducts(pageNumber); 
    };

    // Função de paginação
    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;
        
        this.loadProducts(pageNumber);
    };

    // Renderiza o componente
    render() {
        const { products, page, productInfo } = this.state;

        return (
            // Criando a forma de exibição dos itens
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        );
    }
}