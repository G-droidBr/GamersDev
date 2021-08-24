import axios from 'axios'
import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`

display: flex;
justify-content: center;
align-items: center;
margin: 2rem;
background: rgb(54,54,54);
border-radius: 25px;
width: 10rem;
height: 10rem;

   
    
    
    
    `
const Game = styled.div`
 
button{
    width: 2rem;
    height: 2rem;
}
 
    `






class RandomCards extends Component {

handleDelete = (id) => {

axios.delete(`http://localhost:8000/characters/${id}`)

}

    render() {
        return (
            <Card>
                <Game>
                    <h3>{this.props.name}</h3>
                    <button onClick = {id => this.handleDelete(id)}></button>
                </Game>
            </Card>
        )
    }
}

export default RandomCards
