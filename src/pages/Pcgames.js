import React, { Component } from 'react'

import Cards from '../componets/cards/Cards'
import styled from 'styled-components'


const Div = styled.div`

    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
   justify-content: space-around;
    height: 100vh; 
    width: 96vw;
    background-color:  rgb(9, 9, 9);
    @media only screen and (max-width: 800px) {  
        width: 97vw;
        margin-left: -1rem;
        height: 98vh;
    }
`

class Pcgames extends Component {

    state = {
        pcGames: []
    }



    componentDidMount = () => {
        
        
        this.props.navbar()
        
        let games = this.props.filter.filter((element) => {

            return element.platforms.some(platform => platform.platform.name === "PC")

        })

        this.setState({
            pcGames: games,
        })

    }
    
  

    render() {

        console.log(this.props.filter)
        
        return (

            <Div>

                {this.state.pcGames.map((games, i) => {
                    return <Cards  name={games.name} background={games.background_image} datas={games.released} platforms={games.platforms} metacritic={games.metacritic}  />
                })}

            

            </Div>
        )
    }
}

export default Pcgames
