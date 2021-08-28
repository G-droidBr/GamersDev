import React, { Component } from 'react'
import axios from 'axios'
import CardInfo from '../componets/CardInfo'
import Loading from '../componets/loading/Loading'

class GamesDetails extends Component {
   
    state ={
        game : [],
        loading : false
    }

   componentDidMount = async () => {
    
    
    let games = await axios.get(`https://api.rawg.io/api/games/${this.props.match.params.id.toString()}`, { params: { key: "6931a242171a4c0ba9734f9d40a8c740" } })
    

    this.setState({
        game : games.data,
        loading : true
    })
   }

   
    render() {
       
        return (
            <div>
                
                {this.state.loading ? <CardInfo {...this.state.game} /> : <Loading/> }
                
            </div>
        )
    }
}

export default GamesDetails
