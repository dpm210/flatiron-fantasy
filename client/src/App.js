import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {react, useState, useEffect} from 'react'

//component imports
import Admin from './Admin'
import GameCard from './GameCard'
import GroupCard from './GroupCard'
import Home from './Home'
import Leaderboard from './Leaderboard'
import LogIn from './LogIn'
import NavBar from './NavBar'
import PickemsPage from './PickemsPage'
import SignUp from './SignUp'

function App() {

  //Setting States
  const [user, setUser] = useState([])
  const [group, setGroup] = useState([])

  //Load Data

  useEffect(() => {
    fetch('http://localhost:3000/groups/')
    .then(res => res.json())
    .then(groupData => setGroup(groupData))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/users/')
    .then(res => res.json())
    .then(userData => setUser(userData))
  }, [])


  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path='/'>
            <Home group={group} setGroup={setGroup} />
          </Route>

          <Route path='/pickems'>
            <PickemsPage />
          </Route>

          <Route path='/leaderboard'>
            <Leaderboard />
          </Route>

          <Route path='/login'>
            <LogIn />
          </Route>

          <Route path='/signup'>
            <SignUp />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
