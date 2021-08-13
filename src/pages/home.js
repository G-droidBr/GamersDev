import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Cards from './Cards'

const Div = styled.div`
    /* position: absolute;
    height: 100%;
    width: calc(100% - 78px);
    left: 78px;
    transition: all 0.5s ease; */
    display: flex;
   
    margin-left:270px;
    background-color: ;
    width: 100vw;

  
    
`





class Home extends Component {

    state = {
        library  : []
        
    }

    componentDidMount = async () => {
       
        let games = await axios.get("https://api.rawg.io/api/games", {params : {key : "6931a242171a4c0ba9734f9d40a8c740"}})
        .then((result) => result.data.results )

        this.setState({
            library : games
        })
      
      }


    render() {
        return (

            <Div>
                {console.log(this.state.library)}
                {this.state.library.map(games => {
                  return <Cards name={games.name} background = {games.background_image}/>
                })}

            </Div>





        )
    }
}

export default Home
