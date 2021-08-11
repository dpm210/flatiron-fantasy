import {useState} from 'react'
function GroupCard({group, users, joinGroupFilter}){
    // console.log(users)

    function handleClick(){
        fetch('http://localhost:3000/user_groups', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "user_id": 7,
                "group_id": group.id
            })
        })
        joinGroupFilter(group.id)
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