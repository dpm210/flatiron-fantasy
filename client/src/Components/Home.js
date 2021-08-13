import GroupCard from './GroupCard'
import UserGroupCard from './UserGroupCard'
import {useState, useEffect} from 'react'
import { Grid, Image, Button, Icon, Modal } from 'semantic-ui-react'

function Home({groups, setCurrentGroup, userGroups, currentGroup, currentUser, setCurrentUser}){
    const [isClicked, setIsClicked] = useState(false)
    const [leagueName, setLeagueName] = useState("")
    
    function handleClick(){
        setIsClicked(!isClicked)
        console.log(isClicked)
    }

    function handleCancel(){
        setIsClicked(!isClicked)
    }

    function handleLeagueName(e){
        setLeagueName(e.target.value)
        console.log(leagueName)
    }

    function handleSubmitLeague(e){
        // e.preventDefault()
        fetch('http://localhost:3000/groups', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'title': leagueName
            })
        })
        console.log(leagueName)
    }

    const joinGroupFilter = (id) => {
        let joinGroup = [...groups]
        joinGroup = joinGroup.filter((group)=>{
            console.log(group.id);
            return group.id !== group.id
         })
        //  setGroup(joinGroup)
    }

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
             <UserGroupCard userGroup={userGroup} key={userGroup.id} groups={groups} setCurrentGroup={setCurrentGroup} currentGroup={currentGroup} currentUser={currentUser} setCurrentUser={setCurrentUser} />
             </div>
             <br />
             </>
    })
    return(
        <div>
            <div>

            {isClicked === true ?
            <div>
            <form type='submit' onSubmit={handleSubmitLeague}>
            <input onChange={handleLeagueName} placeholder="League Name"></input>
            <Button>Submit League</Button>
            </form>
            <Button onClick={handleCancel}>Cancel</Button>
            </div>
            : 
            <Button onClick={handleClick}>
                Create New League
            </Button>}
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