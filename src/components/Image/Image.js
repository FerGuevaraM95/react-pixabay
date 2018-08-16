import React from 'react';

import './image.css'

const Image = (props) => {

    const {largeImageURL, likes, previewURL, tags, views} = props.image;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img className="card-img-top" src={previewURL} alt={tags} />
                <div className="card-body">
                    <div className="card-text">{likes} Me gusta</div>
                    <div className="card-text">{views} Vistas</div>

                    <a className="btn btn-primary btn-block" href={largeImageURL} target="_blank">Ver Imagen</a>
                </div>
            </div>
        </div>
    );
}
 
export default Image;