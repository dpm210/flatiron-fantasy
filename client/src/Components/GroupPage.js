import {useState, useEffect} from 'react'
function GroupPage({group, currentGroup, setCurrentGroup}){
    const [newGroup, setNewGroup] = useState([])
    
    useEffect(() => {
        const groupId = localStorage.getItem('group_id')
        const userId = localStorage.getItem('user_id')
        fetch(`http://localhost:3000/users/${userId}`)
        .then(res => res.json())
        .then(groupUsers => setNewGroup(groupUsers))
    },[])
    
    console.log(newGroup)


// const groupLeaderboard = newGroup.map(user =>
//     <tr>
//     <td>{user.username}</td>
//     <td>{user.total_points}</td>
//     </tr>
//     )


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
                {/* {groupLeaderboard} */}
        </tbody>

    </table>
     </div>
    )
}

export default GroupPage