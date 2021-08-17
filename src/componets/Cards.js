import React, { Component } from 'react'
import styled from 'styled-components'
import {FaXbox,FaPlaystation} from 'react-icons/fa';
import {AiFillWindows} from "react-icons/ai"


const Card = styled.div`


    display: flex;
    flex-direction: column;
    align-items: center;

    margin-left: 3rem;
    margin-top:3rem ;
    height: 100vh;
    margin: 3rem;
    
    background: rgb(54,54,54);
    height: 20rem;
    width: 15rem;
    border-radius: 25px;
    img{

        width: 100%;
        height: 20vh;
        border-radius: 25px 25px;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 50%;
    }
    h3{
        font-size: 1rem;
    }
    
`


let platforms = {

    Xbox_One : <FaXbox/> ,
    PC : <AiFillWindows/>,
    PlayStation_4 : <FaPlaystation/>,
    Xbox_360: <FaXbox/> ,
    Nintendo_Switch: ""


}

class Cards extends Component {



handlePlataforms = () => {

    let platforms = []

    for (let i = 0; i < this.props.platforms ; i++){
    platforms += this.props.platforms[i].platform.name
    }
  
}



render() {
    console.log(this.props.platforms)
    return (
        <Card>
                    
                <img src={this.props.background} alt="logo" />
                <div>
                    <h3>

                        {platforms.PC}
                        {platforms.Xbox_One}
                        {platforms.PlayStation_4}
                    
                    </h3>
                    <h3>{this.props.name}</h3>
                    <h4>{this.props.datas}</h4>
                </div>
            </Card>
        )
    }
}

export default Cards
