import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
function UserGroupCard({user, group, currentGroup, setCurrentGroup}){

// console.log(group)
// const history = useHistory();
function handleClick(){
    setCurrentGroup(user)
    // history.push('/')
}
console.log(currentGroup)



    return(

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{user.title}</h5>
                            <Link to='/Group'>
                            <button onClick={handleClick}>View League</button>
                            </Link>
                        </div>
                    </div>
    )
}

export default UserGroupCard