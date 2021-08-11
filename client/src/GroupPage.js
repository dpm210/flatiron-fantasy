import {useState, useEffect} from 'react'
import Leaderboard from './Leaderboard'

function GroupPage({group, currentGroup, setCurrentGroup}){

// console.log(currentGroup)

useEffect(() => {
    fetch(`http://localhost:3000/groups/${currentGroup.id}`)
    .then(res => res.json())
    .then(groupUsers => console.log(groupUsers.users))
})

// const groupLeaderboard = currentGroup.map(user => 
//     <Leaderboard user={user} key={user.id}/>)


    return(
        <div>

        </div>
    )
}

export default GroupPage