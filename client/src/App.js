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
import GroupPage from './GroupPage'

function App() {
  const [users, setUsers] = useState([])
  const [group, setGroup] = useState([])
  const [currentGroup, setCurrentGroup] = useState([])


  //Load Data
  useEffect(() => {
      const userId = localStorage.getItem('user_id')
      fetch(`http://localhost:3000/users/7`)
      .then(res => res.json())
      .then(userData => setUsers(userData.groups))
      }, []);

      // console.log(users)

  useEffect(() => {
    fetch('http://localhost:3000/groups/')
    .then(res => res.json())
    .then(groupData => setGroup(groupData))
  }, [])


  


  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path='/'>
            <Home users={users} group={group} setGroup={setGroup} currentGroup={currentGroup} setCurrentGroup={setCurrentGroup} />
          </Route>

          <Route path='/group'>
            <GroupPage currentGroup={currentGroup} setCurrentGroup={setCurrentGroup}/>
          </Route>

          <Route path='/pickems'>
            <PickemsPage  />
          </Route>

          <Route path='/leaderboard'>
            <Leaderboard group={group} currentGroup={currentGroup}/>
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
