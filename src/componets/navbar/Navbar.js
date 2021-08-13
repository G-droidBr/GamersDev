import React, { Component } from 'react'
import styled from 'styled-components'

const Navbarr = styled.nav`

display: flex;
justify-content: flex-start;
align-items: center;
height: 10vh;
background-color: black;
margin-top: 0;
width: 100vw;

input{
    
    margin-left: 17vw;
    width: 50vw;
    height: 4vh;
    border-radius: 2rem;
    background-color: rgb(9, 9, 9);
    color: white;
    font-size: 1.5rem;
    text-align: center;
}

`
const Title = styled.h1`
margin-left: 5vh;
color: white;

`


class Navbar extends Component {
    render() {
        return (
            <Navbarr>
    
                <Title>GamersDev</Title>
                <input/>
               
            </Navbarr>
        )
    }
}

export default Navbar
