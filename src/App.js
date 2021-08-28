import styled from 'styled-components'
import './App.css';
import { Switch, Route } from 'react-router-dom'


import Navbar from './componets/navbar/Navbar';
import NavbarFalse from './componets/navbar/NavbarFalse';

import { Component } from 'react';
import axios from 'axios'

import Home from './pages/Home';
import Creators from './pages/Creators';
import Random from './pages/Random';
import SideBar from './componets/side-bar/SideBar';
import Pcgames from './pages/Pcgames';
import BestGames from './pages/BestGames';
import PlayStation from './pages/PlayStation';
import Nintendo from './pages/Nintendo';
import GamersDev from './pages/GamersDev';
import GamesDetails from './pages/GamesDetails';



const Content = styled.div`

    display: flex;
    transition: all 0.5s ease; 
    margin-left: ${(props) => props.isOpen ? "200" : "80"}px;

    @media only screen and (max-width: 1000px) {
    
      margin-left: ${(props) => props.isOpen ? "150" : "80"}px;
     
   }

   
`

class App extends Component {


  state = {
    navbar: true,
    library: [],
    sideBar: false,
    filterGames: [],
    pcGames: []

  }

  componentDidMount = async () => {

    let games = await axios.get("https://api.rawg.io/api/games", { params: { key: "6931a242171a4c0ba9734f9d40a8c740" } })
      .then((result) => result.data.results)

    this.setState({
      library: games,
      filterGames: games
    })

  }



  toggleSideBar = () => {

    this.setState({
      sideBar: !this.state.sideBar
    })

  }


  handleFilterGames = (value) => {
    const filtered = this.state.library.filter(game => {
      return game.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    })
    this.setState({
      filterGames: filtered
    })

  }

  handleNavbarFalse = () => {
    this.setState({
      navbar: false
    })
  }
  handleNavbar = () => {

  this.setState({
    navbar : true
  })

  }


  

  render() {

    return (
      <div>

  {this.state.navbar ? <Navbar handleFilterGames={this.handleFilterGames} /> :  <NavbarFalse/>}
        


        <div style={{ display: "flex" }}>
          <SideBar isOpen={this.state.sideBar} toggleSideBar={this.toggleSideBar} />
          <Content isOpen={this.state.sideBar}>

            <Switch>
      
              <Route exact path="/" render={(props) => <Home {...props} filter={this.state.filterGames} library={this.state.library} navbar = {this.handleNavbar} />} />

              <Route path="/creators" render={(props) => <Creators {...props}  navbar = {this.handleNavbarFalse} />} />

              <Route path="/bestgames" render={(props) => <BestGames {...props} library={this.state.library} navbar = {this.handleNavbarFalse} />} />

              <Route path="/pcgames" render={(props) => <Pcgames {...props} filter={this.state.filterGames} navbar = {this.handleNavbarFalse} />} />

              <Route path="/playstation" render={(props) => <PlayStation {...props} filter={this.state.filterGames}  navbar = {this.handleNavbarFalse}/>} />

              <Route path="/nintendo" render={(props) => <Nintendo {...props} filter={this.state.filterGames} navbar = {this.handleNavbarFalse} />} />

              <Route path="/gamersdev" render={(props) => <GamersDev {...props} filter={this.state.filterGames} navbar = {this.handleNavbarFalse} />} />
              
             <Route path="/random" render={(props) => <Random {...props} filter={this.state.filterGames} navbar = {this.handleNavbarFalse}/>} />

             <Route path = "/:id" render = {(props) => <GamesDetails {...props} library={this.state.library} /> } />

              </Switch>
          </Content>
        </div>

      </div>
    )
  };
}

export default App;
