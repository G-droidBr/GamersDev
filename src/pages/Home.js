import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Cards from '../componets/cards/Cards'

const Div = styled.div`

    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
   justify-content: space-around;
    height: 100vh; 
    width: 96vw;
    background-color:  rgb(9, 9, 9);
    @media only screen and (max-width: 800px) {  
        width: 90vw;
        margin-left: -3rem;
        height: 98vh;
}

  
`





class Home extends Component {

    componentDidMount = () => {

        this.props.navbar()
        
    }
  
    
    render() {
        return (
            
            <Div>
             
                {this.props.filter.map(games => {
                return <Link style = {{textDecoration : "none",color : "black"}} to = {`/${games.id}`}> <Cards name={games.name} background = {games.background_image} datas = {games.released} platforms = {games.platforms} metacritic = {games.metacritic} /> </Link>
                })}
               
            </Div>





        )
    }
}

export default Home
