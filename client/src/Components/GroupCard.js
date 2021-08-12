import {useState, useEffect} from 'react'
function GroupCard({userGroup,group, setCurrentGroup, currentUser, setCurrentUser}){
    console.log(currentUser)

    function handleClick(){
        fetch('http://localhost:3000/user_groups', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "user_id": currentUser.id,
                "group_id": group.id,
                "total_points": 0
            })
        })
        // joinGroupFilter(group.id)
    }

    return(

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{group.title}</h5>
                            <button onClick={handleClick}>Join League</button>
                        </div>
                    </div>
    )
}

export default GroupCard