import React, { Component } from 'react'
import styled from 'styled-components'
import Cards from '../componets/Cards'
import axios from 'axios'

const Div = styled.div`

    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
   justify-content: space-around;
    height: 100vh; 
    width: 96vw;
    background-color:  rgb(9, 9, 9);
    
  
`
 class Random extends Component {

    state = {
        random: ''
    }


    componentDidMount(){
    this.newRandom()
    }

    newRandom = async () => {
        const result = await axios.get('https://api.rawg.io/api/games?api_key=6931a242171a4c0ba9734f9d40a8c740')
        const newRandom = result.data.embed_url
        this.setState({
            random : newRandom
        })
    }

                
    

    render() {
        return (
            <Div>
               
                {this.state.gameList.map((game, index) => {
                    return <Cards  name={game.name} background={game.background_image} datas={game.released} platforms={game.platforms} metacritic={game.metacritic}  />
                })}

            </Div>
        )
    }
}

export default Random