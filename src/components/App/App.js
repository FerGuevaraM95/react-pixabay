import React, { Component } from 'react';

import Searcher from '../Searcher'
import Result from '../Result';

import './app.css';

class App extends Component {

    state = {
        term: '',
        images: [],
        page: '',
        loading: false
    }

    requestAPI = async () => {
        const term = this.state.term;
        const page = this.state.page
        const url = `https://pixabay.com/api/?key=9844945-4ff0d46144de02b9ea0ff7bba&q=${term}&per_page=30&page=${page}`;

        console.log(url);

        await fetch(url)
            .then(response => {
                this.setState({
                    loading: true
                })
                return response.json()
            })
            .then(result => {
                setTimeout(() => {
                    this.setState({
                        images: result.hits,
                        loading: false
                    })
                }, 1600);
            })
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
      const loading = this.state.loading;

      let result;

      if(loading) {
          result =  <div className="mt-5 sk-folding-cube">
                        <div className="sk-cube1 sk-cube"></div>
                        <div className="sk-cube2 sk-cube"></div>
                        <div className="sk-cube4 sk-cube"></div>
                        <div className="sk-cube3 sk-cube"></div>
                    </div>
      } else {
          result =  <Result
                        images={this.state.images}
                        previousPage={this.previousPage}
                        nextPage={this.nextPage}
                    />
      }

    return (
        <div className="app container">
            <div className="jumbotron">
                <p className="lead text-center">Buscador de Imágenes</p>
                <Searcher
                    searchData={this.searchData}
                />
            </div>
            <div className="row justify-content-center">
                {result}
            </div>
        </div>
    );
  }
}

export default App;
