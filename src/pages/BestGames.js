import React, { Component } from 'react'
import Cards from '../componets/cards/Cards'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


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




 

 class BestGames extends Component {

    state = {
        bestgames: []
    }
    
    componentDidMount = () => {
        
        this.props.navbar()
        
       let copy = [...this.props.library]

        let filtered = copy.sort((a, b) => {


            if (a.metacritic > b.metacritic) {
                return -1
            }
            if (a.metacritic < b.metacritic) {

                return 1
            }

            return 0;
        })

        this.setState({
            bestgames: filtered
        })

    }
   

    render() {
        return (
            <Div>
                {this.state.bestgames.map((games, i) => {
                    return <Link style = {{textDecoration : "none",color : "black"}} to = {`/${games.id}`}><Cards name={games.name} background={games.background_image} datas={games.released} platforms={games.platforms} metacritic={games.metacritic} /></Link>
                })}
            </Div>
        

        )
    }
}

export default BestGames
