import React, { Component } from 'react'
import CardsCreators from "../componets/CardsCreators"

 class Creators extends Component {

    state = {
        creators : []
    }

    componentDidMount = () => {
            
    }
  

    render() {
        return (
            <div>
                
                <CardsCreators />
            </div>
        )
    }
}

export default Creators
