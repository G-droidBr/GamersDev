import React, { Component } from 'react'

import Cards from '../componets/Cards'
import styled from 'styled-components'


const Div = styled.div`

    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
   justify-content: space-around;
    height: 100vh; 
    width: 95vw;
    background-color:  rgb(9, 9, 9);
    
  
`

 class Pcgames extends Component {

    state = {
        libary : this.props.filter,
        pcGames : []
    }
   
    // handlePcGames = () => {

    //     // this.props.filter[0].map((game) => {
    //     //     return console.log(game.platforms.platform.name)
    //     // })
    // } 


    render() {
        return (
            <Div>
              
               {this.props.filter.map(games => {
                   return <Cards name={games.name} background = {games.background_image} datas = {games.released} platforms = {games.platforms} metacritic = {games.metacritic} />
               })}
            
            </Div>
        )
    }
}

export default Pcgames
