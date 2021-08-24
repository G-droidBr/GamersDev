import React, { Component } from 'react'
import CardsCreators from "../componets/CardsCreators"

 class Creators extends Component {

    state = {
        creators : []
    }

    componentDidMount = () => {
            
    }
  
    componentDidMount = () => {
       
        this.props.navbar()

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
