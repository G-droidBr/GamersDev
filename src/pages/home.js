import React, { Component } from 'react'
import styled from 'styled-components'

import Cards from '../componets/Cards'

const Div = styled.div`

    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
   justify-content: space-around;
    height: 100vh; 
    width: 96vw;
    background-color:  rgb(9, 9, 9);
    
  
`





class Home extends Component {

    
  
    
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

export default Home
