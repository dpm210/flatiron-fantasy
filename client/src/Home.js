import GroupCard from './GroupCard'
import UserGroupCard from './UserGroupCard'
import {useState, useEffect} from 'react'

function Home({users, group, setGroup, currentGroup, setCurrentGroup}){


    const joinGroupFilter = (id) => {
        let joinGroup = [...group]
        joinGroup = joinGroup.filter((group)=>{
            console.log(group.id);
            return users.id !== group.id
         })
         setGroup(joinGroup)
    }

    const groupCards = group.map(group => {
        return <>
         <div className="col-3" style={{ marginBottom: '20px',  }}>
             <GroupCard group={group} key={group.id} users={users} joinGroupFilter={joinGroupFilter}/>
             </div>
             <br />
             </>
    })

    const userGroupCards = users.map(user => {
        return <>
         <div className="col-3" style={{ marginBottom: '20px',  }}>
             <UserGroupCard user={user} key={user.id} users={users} group={group} currentGroup={currentGroup} setCurrentGroup={setCurrentGroup} />
             </div>
             <br />
             </>
    })
    return(
        <div>
            <div>
                <h2>Join Leagues</h2>
                <div className="row">{groupCards}</div>
            </div>
            <div>
                <h2>My Leagues</h2>
                <div>{userGroupCards}</div>
            </div>
        </div>
    )
}

export default Home