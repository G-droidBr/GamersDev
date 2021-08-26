import axios from 'axios'
import React, { Component } from 'react'
import styled from 'styled-components'
import {MdDeleteForever} from "react-icons/md"

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
 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 
    `
const Name = styled.h3`
font-size: 1rem;
`
const Button = styled.div`
display: flex;
justify-content: center;
background-color: rgb(54,54,54);

font-size: 2rem;

:hover{
    color: black;
}

`





class RandomCards extends Component {

handleDelete = async(id) => {
console.log(id)
 await axios.delete(`http://localhost:8000/characters/${id}`)

    this.props.update()

}




    render() {
     console.log(this.props.id)
        return (
            <Card>
                <Game>
                    <Name>{this.props.name}</Name>
                    <Button onClick = {() => this.handleDelete(this.props.id)}><MdDeleteForever/></Button>
                </Game>
            </Card>
        )
    }
}

export default RandomCards
