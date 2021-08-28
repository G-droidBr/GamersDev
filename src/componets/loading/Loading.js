import React, { Component } from 'react'
import styled from 'styled-components'

const Div = styled.div`

display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;

`
const Image = styled.img`
height: 8rem;
`

class Loading extends Component {
    render() {
        return (
            <Div>
               <Image src="https://c.tenor.com/I6kN-6X7nhAAAAAi/loading-buffering.gif" alt="gif"/>
            </Div>
        )
    }
}

export default Loading
