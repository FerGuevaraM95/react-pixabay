import React from 'react';

const Pagination = (props) => {
    return (
        <div className="py-5">
            <button onClick={props.previousPage} className="btn btn-info mr-1" type="button">Anterior &larr;</button>
            <button onClick={props.nextPage} className="btn btn-info" type="button">Siguiente &rarr;</button>
        </div>
    );
}
 
export default Pagination;