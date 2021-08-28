import React, { Component } from 'react'
import styled from 'styled-components'
import { FaUserAstronaut } from 'react-icons/fa';

const Navbarr = styled.nav`

display: flex;
justify-content: space-around;
align-items: center;
height: 10vh;
background-color: black;
margin-top: 0;
width: 100vw;
@media only screen and (max-width: 1000px) {
   width: 100vw;
}

input{
    
    width: 35vw;
    height: 4vh;
    border-radius: 2rem;
    background-color: rgb(9, 9, 9);
    color: white;
    font-size: 1.1rem;
    padding-left: 1rem;
    font-family: inherit;
    :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    
    @media only screen and (max-width: 1000px) {
   width: 20vw;
   
  }
 }
}

i {
    color: white;
    font-size: 2rem;
    @media only screen and (max-width: 100px) {
   color: blue;
   font-size: 0px;
}
}

`
const Title = styled.h1`

color: white;

@media only screen and (max-width: 100px) {
    Title{
        font-size: 2px;
    } 
   
    
}


`


class Navbar extends Component {

    state = {
        value: ""
    }

    handleInput = (ev) => {

        this.setState({
            value: ev.target.value
        }, () => this.props.handleFilterGames(this.state.value))
    }


    render() {
        return (
            <Navbarr >
                <Title className = "Title">GamersDev</Title>

                <input
                    value={this.state.value}
                    onChange={this.handleInput}
                />


                <i><FaUserAstronaut /></i>
            </Navbarr>
        )
    }
}

export default Navbar
