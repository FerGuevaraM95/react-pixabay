import React, { Component } from 'react';

import Searcher from '../Searcher'
import Result from '../Result';

class App extends Component {

    state = {
        term: '',
        images: []
    }

    requestAPI = () => {
        const term = this.state.term;
        const url = `https://pixabay.com/api/?key=9844945-4ff0d46144de02b9ea0ff7bba&q=${term}&per_page=30`;

        fetch(url)
            .then(response => response.json())
            .then(result => this.setState({images: result.hits}))
    }

    searchData = (term) => {
        this.setState({
            term
        }, () => {
            this.requestAPI();
        })
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
            <div className="row">
                <Result
                    images={this.state.images}
                />
            </div>
        </div>
    );
  }
}

export default App;
