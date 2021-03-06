import React, { Component } from 'react'
import { Consumer } from "./AnimeContext";
import "./Anime.scss";

class Anime extends Component {


    render() {
        const {id, name, image_url, url } = this.props.caracter
        return (
            <Consumer>
                {value => (
                <div className="anime">
                    <figure className="anime__img">
                        <img src={image_url} alt={id}/>
                    </figure>
                    <div className="anime__info">
                    <h3 className="anime__name">
                        {name}
                    </h3>
                    <a href={url} rel="noopener noreferrer" target="_blank" className="btn btn-primary" > More + </a>
                    </div>
                </div>
                )}
            </Consumer>
        );
 
    }
}

Anime.defaultProps = {
    caracter : {
        id : 0, 
        name : "default name ( akuma ) ",
        urlImg : "src/assets/akuma.jpg",
        link : "http://github.com",
    }
}

export default Anime;

