import React, { Component } from 'react'
import styled from 'styled-components'
import Cards from '../componets/cards/Cards'
import {Link } from 'react-router-dom'

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
 class PlayStation extends Component {

    state = {
        psn : []
    }

    componentDidMount = () => {
        this.props.navbar()
        
        let games = this.props.filter.filter((element) => {

            return element.platforms.some(platform => platform.platform.name === "PlayStation 4")

        })

        this.setState({
            psn : games,
        })

    }

    render() {
        return (
            <Div>
               
                {this.state.psn.map((games) => {
                    return <Link style = {{textDecoration : "none",color : "black"}} to = {`/${games.id}`}><Cards  name={games.name} background={games.background_image} datas={games.released} platforms={games.platforms} metacritic={games.metacritic}  /> </Link>
                })}

            </Div>
        )
    }
}

export default PlayStation
