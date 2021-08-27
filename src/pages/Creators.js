import React, { Component } from 'react'
import styled from 'styled-components'
import CardsCreators from "../componets/creators/CardsCreators"

const Div = styled.div`
    
    @media only screen and (max-width: 800px) {  
        margin-left: -1rem;
        height: 98vh;
}

`
class Creators extends Component {

    state = {
        creators: []
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
