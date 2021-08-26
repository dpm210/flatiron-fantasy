import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Button, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



function SignUp(){
const [newUser, setNewUser] = useState("")
const [newPassword, setNewPassword] = useState('')
const [signUpErrors, setSignUpErrors] = useState([])

// const history = useHistory();

document.title="Sign Up"

function usernameSubmit(e){
    setNewUser(e.target.value)
}
function userPasswordSubmit(e){
    setNewPassword(e.target.value)
}

function handleSignUp(e){
    e.preventDefault()
    const signUpUser = {
    "username": newUser,
    "password": newPassword,
    "acct_type": "player"
}
// console.log(signUpUser);
    // console.log(signUpErrors);
    // console.log(data)

fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' 
    },
    body: JSON.stringify(signUpUser),
})
    .then((res) => res.json())
    .then((data) => {
        if(data.errors) {
        setSignUpErrors(data.errors);
    } else {
        // history.push('/signin')
    }
   
  });
}
// console.log(newUser);
// console.log(newPassword);
const errorMes = signUpErrors.map((err) => 
    <p>{err}</p>

)

// console.log(errorMes)
    return(
        <div>
        <div className="form-section">
            <br />
        <h2 className="sign-in-out">Sign Up</h2>
            <form onSubmit={handleSignUp}>
            <div className="ui input">
                <input onChange={usernameSubmit} type="text" name='username' value={newUser} placeholder='Username'/>
            </div>
            <br/>
            <br/>
            <div className="ui input">
                <input onChange={userPasswordSubmit} type="password" name='password' value={newPassword} placeholder='Password'/>
            </div>
            <br/>
            <br/>
             <Button className="ui primary button" type='submit'>Sign Up</Button>
             <div>{errorMes}</div>
         </form>
         <br />
         <p>Already have an account?</p><Link to='/login'>Login</Link>
    </div>
    </div>
 )
}


export default SignUp;