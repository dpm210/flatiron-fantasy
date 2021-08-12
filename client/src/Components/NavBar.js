import {Link} from 'react-router-dom'
function NavBar({currentUser, setCurrentUser}){
    console.log(currentUser.acct_type)

    function handleSignOut(){
        fetch('http://localhost:3000/signout', {
            method: "DELETE",
        })
        localStorage.removeItem("user_id")
        localStorage.removeItem("group_id")
        setCurrentUser([])
    }

    return(
        <div>
            <h2>{currentUser.username}</h2>
            {currentUser.acct_type === "admin" ? 
                <div>
                    <button>Admin</button>
                </div>
                : null}
                {Object.keys(currentUser).length > 0 ? 
                <Link to='login'>
                <button onClick={handleSignOut}>Sign Out</button> 
                </Link>
                : null}

        </div>
    )
}

export default NavBar