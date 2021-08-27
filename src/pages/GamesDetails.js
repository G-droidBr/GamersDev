import React, { Component } from 'react'

class GamesDetails extends Component {
   
    state ={
        game : []
    }

//    componentDidMount = async () => {
//      let gamefiltered = await this.props.library.filter((game) => {
//        return  game.id == this.props.match.params.id
//     })
//     this.setState({
//         game : gamefiltered
//     })
//    }
   
    render() {
       
        return (
            <div>
                {/* <h1>{console.log(this.state.game)}</h1> */}
               
            </div>
        )
    }
}

export default GamesDetails
