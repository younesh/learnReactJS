import React, { Component } from 'react'

/* et01 creer une var contect  */
const ContextAnime = React.createContext();
/* et02 enlever le default et renomer la class  ProviderAnime */
export  class ProviderAnime extends Component {
 
 constructor(props) {
    super(props);
     console.log("why cionstruct !  ");
    //  this.resAnimes(); 

   }

   state = {
    animes : []
   }
      resAnimes =  async () =>{
        const response = await fetch("https://api.jikan.moe/v3/anime/1/characters_staff");
        const animeFetch  = await response.json();
        this.setState({animes  :  animeFetch.staff});
      };


      componentDidMount  ()  {
           this.resAnimes();
      }

    render() {
        return (
            <div>
                {/* et03 */}
                <ContextAnime.Provider value={this.state}>
                 {this.props.children}
                </ContextAnime.Provider>
            </div>
        )
    }
}

export const Consumer = ContextAnime.Consumer; 
