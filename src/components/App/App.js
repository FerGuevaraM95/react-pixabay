import React, { Component } from 'react';

import Searcher from '../Searcher'
import Result from '../Result';

class App extends Component {

    state = {
        term: '',
        images: [],
        page: ''
    }

    requestAPI = () => {
        const term = this.state.term;
        const page = this.state.page
        const url = `https://pixabay.com/api/?key=9844945-4ff0d46144de02b9ea0ff7bba&q=${term}&per_page=30&page=${page}`;

        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(result => this.setState({images: result.hits}))
    }

    searchData = (term) => {
        this.setState({
            term: term,
            page: 1
        }, () => {
            this.requestAPI();
        })
    }

    previousPage = () => {
        // leemos el state
        let page = this.state.page;
        // si es la pagina 1, ya no podemos retroceder
        if(page === 1) return null;
        //restar a la pagina actual
        page -= 1;
        // agregar al state
        this.setState({
            page
        }, () => {
            this.requestAPI();
            this.scroll();
        });
    }

    nextPage = () => {
        // leemos el state
        let page = this.state.page;
        //sumar a la pagina actual
        page += 1;
        // agregar al state
        this.setState({
            page
        }, () => {
            this.requestAPI();
            this.scroll();
        });
    }

    scroll = () => {
        const element = document.querySelector('.jumbotron');
        element.scrollIntoView('smooth', 'start');
    }

  render() {
    return (
        <div className="app container">
            <div className="jumbotron">
                <p className="lead text-center">Buscador de Imágenes</p>
                <Searcher
                    searchData={this.searchData}
                />
            </div>
            <div className="row justify-content-center">
                <Result
                    images={this.state.images}
                    previousPage={this.previousPage}
                    nextPage={this.nextPage}
                />
            </div>
        </div>
    );
  }
}

export default App;
