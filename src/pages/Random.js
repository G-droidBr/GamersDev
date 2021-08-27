import axios from 'axios'
import React, { Component } from 'react'
import styled from 'styled-components'
import RandomCards from '../componets/random/RandomCards'


const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 97vw;
height: 90vh;
margin-top: 2rem;
color: white;
margin-left: -1rem ;
overflow: scroll;
@media only screen and (max-width: 800px) {  
    margin-left: -1rem;
    height: 98vh;
}

`
const Title = styled.h1`
font-size: 3rem;
@media only screen and (max-width: 800px) {
   
   width: 80vw;
 
}
`

const SubTitle = styled.h3`
width: 30rem;
@media only screen and (max-width: 800px) {
   
    width: 80vw;
  
}
`
const InputDiv = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;

`
const Input = styled.input`
font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }


`
const Label = styled.label`
 position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: gray;

  :focus{

  }

`
const BtAdd = styled.button`
    color: white;
	cursor: pointer;
	display: block;
	position: relative;
	border: 3px solid black;
	transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    margin: 2rem;
    width: 9rem;
    height: 4rem;
    background-color:  rgb(9, 9, 9);


    :hover{
        color: #000 !important;
	    background-color: transparent;
	    text-shadow: none;
   
    }
    :hover:before{
        bottom: 0%;
	    top: auto;
	    height: 100%;

    }
    :before{

        display: block;
        position: absolute;
        left: 0px;
        top: 0px;
        height: 0px;
        width: 100%;
        z-index: -1;
        content: '';
        color: #000 !important;
        background:  grey;
        transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
     

    }
@media only screen and (max-width: 800px) {
   
   width: 80vw;
   border-radius: 25px;
 
}
`
const Buttons = styled.div`

display: flex;
@media only screen and (max-width: 800px) {
   
   width: 80vw;
   
 
}

`
const BtRandom = styled.button`

    color: white;
	cursor: pointer;
	display: block;
	position: relative;
	border: 3px solid black;
	transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    margin: 2rem;
    width: 9rem;
    height: 4rem;
    background-color:  rgb(9, 9, 9);

    :hover{
        color: #000 !important;
        background-color: transparent;
        text-shadow: ntwo;
    }
    :hover:before{
        top: 0%;
	    bottom: auto;
	    height: 100%;
    }
    :before {

        display: block;
        position: absolute;
        left: 0px;
        bottom: 0px;
        height: 0px;
        width: 100%;
        z-index: -1;
        content: '';
        color: #000 !important;
        background: grey;
        transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;


}
@media only screen and (max-width: 800px) {
   
   width: 80vw;
   border-radius: 25px;
 
}
`
const Cards = styled.div`

display: flex;
width: 96vw;
margin-left: 1rem;
flex-wrap: wrap;


`
const Card = styled.div`
display: flex ;
justify-content: center;
width: 96vw;
flex-wrap: wrap;
`


class Random extends Component {

    state = {

        name: "",
        fullGames: [],
        random: [],
        listGames: true


    }

    componentDidMount = async () => {
        this.props.navbar()

        let fakeApi = await axios.get("https://ironrest.herokuapp.com/gamersdev").then((result) => result.data)

        this.setState({
            fullGames: fakeApi
        })
    }

    onChange = (e) => {


        const { name, value } = e.target;


        this.setState({
            [name]: value

        })

    }

    addGames = async () => {

        await axios.post("https://ironrest.herokuapp.com/gamersdev", { name: this.state.name })


        this.setState({
            name: ""
        })

        this.handleUpdateList()
    }

    handleRandom = () => {

        let totalGames = this.state.fullGames.length

        let a = Math.floor(Math.random() * totalGames)

        let randomGames = this.state.fullGames[a]

        this.setState({
            random: randomGames,
            listGames: false
        })

    }
    handleBtBack = () => {
        this.setState({
            listGames: true
        })
    }
    handleUpdateList = () => {

        this.componentDidMount()

    }

    render() {
        return (
            <Div>

                <Title> Random Game </Title>

                <SubTitle> Adicione quantos jogos quiser e deixe que nós escolhemos para você!</SubTitle>
                <InputDiv>
                    <Input
                        onChange={(e) => this.onChange(e)}
                        value={this.state.name}
                        name="name"
                    />
                    <Label> Name </Label>

                </InputDiv>

                <Buttons>
                    {this.state.listGames ? <BtAdd type="submit" onClick={this.addGames} > Add Game </BtAdd> : <BtAdd type="submit" onClick={this.handleBtBack} > Back Full List </BtAdd>}
                    <BtRandom onClick={this.handleRandom}>Random Game</BtRandom>
                </Buttons>

                <Cards>
                    {this.state.listGames ? <Card>{this.state.fullGames.map(item => <RandomCards name={item.name} id={item._id} update={this.handleUpdateList} />)} </Card> : <Card> <RandomCards name={this.state.random.name} id={this.state.random.id} /> </Card>}
                </Cards>

            </Div>

        )
    }
}

export default Random