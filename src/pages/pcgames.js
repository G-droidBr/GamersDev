import React, { Component } from 'react'
import axios from 'axios'
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

 class pcgames extends Component {

    state = {

        library : []

    }

    componentDidMount = async () => {

        let games = await axios.get("https://api.rawg.io/api/platforms", { params: { key: "6931a242171a4c0ba9734f9d40a8c740" } })
          .then((result) => result.data.results[0].games)
    
        this.setState({
          library: games
        })
    
      }

   

    render() {
        return (
            <Div>
               
               {this.state.library.map(games => {
                   return <Cards name={games.name} background = {games.background_image} datas = {games.released}/>
               })}
            </Div>
        )
    }
}

export default pcgames
