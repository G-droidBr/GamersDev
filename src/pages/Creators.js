import React, { Component } from 'react'
import CardsCreators from "../componets/creators/CardsCreators"

 class Creators extends Component {

    state = {
        creators : []
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
