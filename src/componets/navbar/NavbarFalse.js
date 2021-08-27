import React, { Component } from 'react'
import styled from 'styled-components'
import { FaUserAstronaut } from 'react-icons/fa';

const Navbarr = styled.nav`

display: flex;
align-items: center;
height: 10vh;
background-color: black;
margin-top: 0;
width: 100vw;
@media only screen and (max-width: 800px) {
   width: 30rem;

}

 i{
     color: white;
     font-size: 2rem;
     margin-left: 2rem;
 }

`






class NavbarFalse extends Component {



    render() {
        return (
                
            <Navbarr>
               <i> <FaUserAstronaut/></i>
               

            </Navbarr>

        
        )
    }
}

export default NavbarFalse