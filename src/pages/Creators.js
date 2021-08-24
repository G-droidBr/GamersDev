import React, { Component } from 'react'
import CardsCreators from "../componets/CardsCreators"

 class Creators extends Component {
  
    componentDidMount = () => {
       
        this.props.navbar()

    }

    render() {
        return (
            <div>
                <CardsCreators/>
            </div>
        )
    }
}

export default Creators
