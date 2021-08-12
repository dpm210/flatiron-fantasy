import GroupCard from './GroupCard'
import UserGroupCard from './UserGroupCard'
import {useState, useEffect} from 'react'

function Home({groups,setCurrentGroup, userGroups, currentGroup}){


    // const joinGroupFilter = (id) => {
    //     let joinGroup = [...group]
    //     joinGroup = joinGroup.filter((group)=>{
    //         console.log(group.id);
    //         return users.id !== group.id
    //      })
    //      setGroup(joinGroup)
    // }

    const groupCards = groups.map(group => {
        return <>
         <div className="col-3" style={{ marginBottom: '20px',  }}>
             <GroupCard group={group} key={group.id} userGroups={userGroups} />
             </div>
             <br />
             </>
    })

    const userGroupCards = userGroups.map(userGroup => {
        return <>
         <div className="col-3" style={{ marginBottom: '20px',  }}>
             <UserGroupCard userGroup={userGroup} key={userGroup.id} groups={groups} setCurrentGroup={setCurrentGroup} currentGroup={currentGroup} />
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