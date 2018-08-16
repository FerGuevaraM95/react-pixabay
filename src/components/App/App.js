import React, { Component } from 'react';

import Searcher from '../Searcher';

class App extends Component {
  render() {
    return (
        <div className="app container">
            <div className="jumbotron">
                <p className="lead text-center">Buscador de Imágenes</p>
                <Searcher />
            </div>
        </div>
    );
  }
}

export default App;
