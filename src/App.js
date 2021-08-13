
import './App.css';
import { Switch , Route} from "react-router-dom"
import Home from './pages/home';
import creators from './pages/creators';
import site from './pages/site';
import random from './pages/random';
import edit from './pages/edit';
import Navbar from './componets/navbar/Navbar';
import SideBar from './componets/side-bar/SideBar';

function App() {
  return (
    <div>
  
      <Navbar/>
      <div style = {{display: "flex"}}>
      <SideBar />

      <Switch>

      <Route exact path = "/home" component = {Home}/>
      <Route path = "/creators" component = {creators}/>
      <Route path = "/site" component = {site}/>
      <Route path = "/random" component = {random}/>
      <Route path = "/edit" component = {edit}/>
      
     </Switch>

      </div>
      
    </div>
  );
}

export default App;
