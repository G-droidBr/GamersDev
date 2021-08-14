import styled from 'styled-components'
import './App.css';
import { Switch, Route } from "react-router-dom"
import Home from './pages/home';
import creators from './pages/creators';
import site from './pages/site';
import random from './pages/random';
import edit from './pages/edit';
import Navbar from './componets/navbar/Navbar';
import SideBar from './componets/side-bar/SideBar';
import { Component } from 'react';

const Content = styled.div`

    display: flex;
    transition: all 0.5s ease; 
    margin-left: ${(props) =>  props.isOpen ? "270" : "120" }px;


   
`

class App extends Component {


  state = {

    sideBar: false

}

toggleSideBar = () => {

  this.setState({
      sideBar: !this.state.sideBar
  })

}

  render() {
    return (
      <div>

        <Navbar />

        <div style={{ display: "flex" }}>
          <SideBar isOpen = {this.state.sideBar} toggleSideBar = {this.toggleSideBar}  />
          <Content isOpen = {this.state.sideBar}>
            <Switch>

              <Route exact path="/" component={Home} />
              <Route path="/creators" component={creators} />
              <Route path="/site" component={site} />
              <Route path="/random" component={random} />
              <Route path="/edit" component={edit} />

            </Switch>
          </Content>
        </div>

      </div>
    )
  };
}

export default App;
