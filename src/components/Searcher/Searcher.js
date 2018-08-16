import React, { Component } from 'react';

class Searcher extends Component {
    render() { 
        return (
            <div className="row">
                <div className="form-group col-md-8">
                    <input className="form-control form-control-lg" type="text"
                    placeholder="Buscar imagen..."/>
                </div>
                <div className="form-group col-md-4">
                    <input className="btn btn-lg btn-danger btn-block" type="submit" value="Buscar"/>
                </div>
            </div>
        );
    }
}
 
export default Searcher;