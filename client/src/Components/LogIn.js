import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom'
import { Button, Segment } from 'semantic-ui-react'
// import { useHistory } from "react-router-dom";


function LogIn({setCurrentUser, currentUser}){
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    
    // const history = useHistory();

    document.title="LogIn"
    console.log(loggedIn)

    async function handleSubmit(e){
     e.preventDefault()
     const user = {
     username:username,
     password
}
// console.log(username)
// console.log(user)

    const res = await fetch(`http://localhost:3000/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
  },
    body: JSON.stringify(user)
})

    const userData = await res.json();
      if(userData.id){
        // console.log(userData)
        localStorage.setItem("user_id", userData.id)
        setCurrentUser(userData)
        setLoggedIn(!loggedIn)
        // console.log(currentUser)
        // history.push('/')
    }  else {
        setErrors(userData.error)
  }
  window.location.reload(false);

};

    return(
        <div>
        <div className="form-section">
            <br />
            <h2 className="sign-in-out">Sign In</h2>
            <form onSubmit={handleSubmit}>
            <div className="ui input">
                <input type="text" name='username' 
                value={username} 
                placeholder='Username' 
                onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <br/>
            <br/>
            <div className="ui input">
                <input type="password" name='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <br/>
            <br/>
                <Button className="ui primary button" type='submit'>Sign In</Button>
                {loggedIn ? <Redirect to='/'/> : null}
                <p>{errors}</p>
            </form>
            <br />
            <p>Don't have an account?</p><Link to='SignUp'>Sign Up!</Link>
        </div>
        </div>
    )
}

export default LogIn;