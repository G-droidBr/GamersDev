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

input{
    
    
    width: 50vw;
    height: 4vh;
    border-radius: 2rem;
    background-color: rgb(9, 9, 9);
    color: white;
    font-size: 1rem;
    text-align: center;
}
i {
    color: white;
    font-size: 2rem;
}

`
const Title = styled.h1`

color: white;

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
            <Navbarr>
                <Title>GamersDev</Title>

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
