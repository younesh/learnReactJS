import React, { Component } from 'react';
import Anime from "./Anime";
import { Consumer } from "./AnimeContext";

import "./Anime.scss"

class AnimeList extends Component {
    render() {
        return (
            <Consumer>
                { value => (
                    <div className="anime-liste">
                        {value.animes.map((item)=>(<Anime caracter={item} key={item.id} />))}
                    </div>
                  )
                }
            </Consumer>
        )
    }
}

export default AnimeList; 
