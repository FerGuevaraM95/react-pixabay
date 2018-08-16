import React, { Component } from 'react';

class Searcher extends Component {

    searchRef = React.createRef();

    getData = (e) => {
        e.preventDefault();

        const term = this.searchRef.current.value;

        this.props.searchData(term);
    }

    render() { 
        return (
            <form onSubmit={this.getData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.searchRef} className="form-control form-control-lg" type="text"
                            placeholder="Buscar imagen..." />
                    </div>
                    <div className="form-group col-md-4">
                        <input className="btn btn-lg btn-danger btn-block" type="submit" value="Buscar" />
                    </div>
                </div>
            </form>
        );
    }
}
 
export default Searcher;