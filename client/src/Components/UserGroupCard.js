import {useState} from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom'
function UserGroupCard({userGroup, groups, setCurrentGroup, currentGroup}){
// const history = useHistory();
// console.log(group)
function handleClick(){
    setCurrentGroup(userGroup)
    localStorage.setItem('group_id', userGroup.id)
    // history.push('/group')

    // console.log(userGroup)
}
console.log(currentGroup)

    return(

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{userGroup.title}</h5>
                            <Link to='/Group'>
                            <button onClick={handleClick}>View League</button>
                            </Link>
                        </div>
                    </div>
    )
}

export default UserGroupCard