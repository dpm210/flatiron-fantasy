import {Link} from 'react-router-dom'
import { Menu, Button} from 'semantic-ui-react'
function NavBar({currentUser, setCurrentUser}){
    // console.log(currentUser.acct_type)

    function handleSignOut(){
        fetch('http://localhost:3000/signout', {
            method: "DELETE",
        })
        localStorage.removeItem("user_id")
        localStorage.removeItem("group_id")
        localStorage.removeItem("group_title")
        setCurrentUser([])
    }

    return(
        <div>
            <Menu>
            <Menu.Item header>
            <h1>Flatiron Fantasy 🏈</h1>
            </Menu.Item>
            <Menu.Item>
                <Link to='/'>
                    Home
                </Link>
            </Menu.Item>
                {currentUser.acct_type === "admin" ? 
            <Menu.Item>
                    <div className='admin-button'>
                        <Link to='/admin'>
                            Admin
                        {/* <Button>Admin</Button> */}
                        </Link>
                    </div>
            </Menu.Item>
                    : null}
                {Object.keys(currentUser).length > 0 ? 
            <Menu.Item onClick={handleSignOut}>
                <Link to='login'>
                    Sign Out
                {/* <Button onClick={handleSignOut}>Sign Out</Button>  */}
                </Link>
            </Menu.Item>
                : null}
            <Menu.Item>
            <h2 className='username'>{currentUser.username}</h2>
            </Menu.Item>
        </Menu>
        </div>
    )
}

export default NavBar