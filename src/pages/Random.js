import axios from 'axios'
import React, { Component } from 'react'
import styled from 'styled-components'
import RandomCards from '../componets/RandomCards'


const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 100vw;
height: 90vh;
margin-top: 2rem;
color: white;

div{
    display: flex;
    flex-wrap: wrap;
}
`
const Title = styled.h1`
font-size: 3rem;
`
const SubTitle = styled.h3`
width: 30rem;
`
const Input = styled.input`
margin-top: 2rem;
width: 35vw;

`
const Bt = styled.button`
margin-top: 1rem;
height: 3rem;
width: 17.5vw;

`


class Random extends Component {

    state = {

        name: "",

        randomGames: []

    }

    componentDidMount = async () => {

        let fakeApi = await axios.get("http://localhost:8000/characters").then((result) => result.data)

        this.setState({
            randomGames: fakeApi
        })
    }

    onChange = (e) => {

       
        const { name, value } = e.target;


        this.setState({
            [name]: value

        })

    }

    addGames = () => {
       

        axios.post("http://localhost:8000/characters", {name : this.state.name })
        this.componentDidMount()
        
        this.setState({
            name :""
        })

    }

    render() {
        return (

            <Div>
                <Title> Random Game </Title>
                
                <SubTitle> Adicione quantos jogos quiser e deixe que nós escolhemos para você!</SubTitle>
                
                <Input
                onChange = {(e) => this.onChange(e)}
                value = {this.state.name}
                name = "name"
                />
                
                <Bt type = "submit" onClick={this.addGames} > Add Game </Bt>

                <div>{this.state.randomGames.map(item => <RandomCards name={item.name} />)} </div>
            </Div>

        )
    }
}

export default Random
