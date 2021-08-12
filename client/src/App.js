import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {react, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

//component imports
import Admin from './Components/Admin.js'
import GameCard from './Components/GameCard.js'
import GroupCard from './Components/GroupCard.js'
import Home from './Components/Home.js'
import Leaderboard from './Components/Leaderboard.js'
import LogIn from './Components/LogIn.js'
import NavBar from './Components/NavBar.js'
import PickemsPage from './Components/PickemsPage.js'
import SignUp from './Components/SignUp.js'
import GroupPage from './Components/GroupPage.js'

function App() {
  const [users, setUsers] = useState([])
  const [groups, setGroups] = useState([])
  const [userGroups, setUserGroups] = useState([])
  const [currentGroup, setCurrentGroup] = useState({})
  const [currentUser, setCurrentUser] = useState({})

  // const history = useHistory()

  //Load Data

  //Get all Groups
  useEffect(() => {
    fetch('http://localhost:3000/groups/')
    .then(res => res.json())
    .then(groupData => setGroups(groupData))
  }, [])

  // console.log(groups)

  //Get All Users
  useEffect(() => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(userData => setUsers(userData))
  },[])

  // console.log(users)

  //Set Current User
  useEffect(() => {
    const userId = localStorage.getItem("user_id")
    // console.log(userId)
    fetch(`http://localhost:3000/me?user_id=${userId}`)
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((newUser => setCurrentUser(newUser)))
      }
    })
  },[])

  // console.log(currentUser)

  //Get User Groups
  useEffect(() => {
      const userId = localStorage.getItem('user_id')
      // console.log(userId)
      fetch(`http://localhost:3000/users/${userId}`)
      .then(res => res.json())
      .then(userGroupData => setUserGroups(userGroupData.groups))
      }, []);

      // console.log(userGroups)

  return (
    <div className="App">
      <Router>
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <Switch>

          <Route exact path='/'>
            <Home groups={groups} setCurrentGroup={setCurrentGroup} userGroups={userGroups} currentGroup={currentGroup} currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </Route>

          <Route path='/group'>
            <GroupPage currentGroup={currentGroup} setCurrentGroup={setCurrentGroup}/>
          </Route>

          <Route path='/pickems'>
            <PickemsPage  />
          </Route>

          <Route path='/leaderboard'>
            <Leaderboard />
          </Route>

          <Route path='/login'>
            <LogIn setCurrentUser={setCurrentUser} currentUser={currentUser}/>
          </Route>

          <Route path='/signup' component={SignUp}>
            <SignUp />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
