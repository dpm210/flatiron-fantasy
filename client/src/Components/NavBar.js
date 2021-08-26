import {Link} from 'react-router-dom'
import { Menu, Button} from 'semantic-ui-react'
import logo from '/Users/danielmueller/Development/phase-5/nfl-pickems-app/client/src/logo/Screen Shot 2021-08-26 at 9.08.48 AM.png'

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
            <Menu size="massive" inverted>
            <Menu.Item header>
            <h2 className='logo'>Flatiron Fantasy</h2>
            </Menu.Item>
            {localStorage.getItem("user_id") === null ? null : 
            <Menu.Item>
                <Link to='/'>
                    Home
                </Link>
            </Menu.Item>
            }
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
            <Menu.Menu position='right'>
                {Object.keys(currentUser).length > 0 ? 
            <Menu.Item onClick={handleSignOut}>
                <Link to='login'>
                <Button className='ui primary button' onClick={handleSignOut}>Sign Out</Button> 
                </Link>
            </Menu.Item>
                : null}
            {localStorage.getItem("user_id") === null ? null : 
            <Menu.Item>
            <h2 className='logo'>Welcome, {currentUser.username}</h2>
            </Menu.Item>     
            }
        </Menu.Menu>
        </Menu>

        <Menu className='ui bottom fixed menu' size="massive" inverted>
            <Menu.Item position='center'>A React & Ruby on Rails project by Dan Mueller</Menu.Item>
        </Menu>
        
        </div>
    )
}

export default NavBar