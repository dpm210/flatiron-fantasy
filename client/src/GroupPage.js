import {useState, useEffect} from 'react'
import Leaderboard from './Leaderboard'

function GroupPage({group, currentGroup, setCurrentGroup}){
    const [newGroup, setNewGroup] = useState([])

useEffect(() => {
    fetch(`http://localhost:3000/groups/${currentGroup.id}`)
    .then(res => res.json())
    .then(groupUsers => setNewGroup(groupUsers))
},[])


const groupLeaderboard = newGroup.users.map(user =>
    <tr>
    <td>{user.username}</td>
    <td>{user.total_points}</td>
    </tr>
    )


    return(
        <div>  
    <table>
        <thead>
            <tr>
                <th>Username</th>
                <th>Points</th>
            </tr>
        </thead>
        <tbody>
                {groupLeaderboard}
        </tbody>

    </table>
     </div>
    )
}

export default GroupPage