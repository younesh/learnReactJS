import React, { Component } from 'react'
import "./Anime.scss";

class Anime extends Component {
    render() {
        const {id, name, urlImg, link } = this.props.caracter
        return (
            <div className="anime">
              <figure className="anime__img">
                  <img src={urlImg} alt={id}/>
              </figure>
              <div className="anime__info">
                <h3 className="anime__name">
                    {name}
                </h3>
                <a href={link} rel="noopener noreferrer" target="_blank" className="btn btn-primary" > More + </a>
              </div>
            </div>
        )
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

