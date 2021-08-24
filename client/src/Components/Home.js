import GroupCard from './GroupCard'
import UserGroupCard from './UserGroupCard'
import {useState, useEffect} from 'react'
import { Grid, Button, Card, Input} from 'semantic-ui-react'

function Home({groups, setCurrentGroup, userGroups, currentGroup, currentUser, setCurrentUser, setGroups}){
    const [isClicked, setIsClicked] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [leagueName, setLeagueName] = useState("")    
    function handleClick(){
        setIsClicked(!isClicked)
        console.log(isClicked)
    }

    document.title = "Home"

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
                'title': leagueName,
                'private': isChecked
            })
        })
        console.log(leagueName)
    }

    function handleChecked(){
        setIsChecked(!isChecked)
        console.log(isChecked)
    }

    console.log(groups)
    console.log(groups.map(group => group.user_groups))

    // const joinGroupFilter = (id) => {
    //     let joinGroup = [...groups]
    //     joinGroup = joinGroup.filter((group)=>{
    //         // console.log(group.id);
    //         return group.id !== groups.map(filter => filter.user_groups.group_id)
    //      })
    //      console.log(joinGroup)
    // }

    const groupCards = groups.map(group => {
        return <>
         <div>
             <Grid.Column>
                <GroupCard group={group} key={group.id} userGroups={userGroups} />
             </Grid.Column>
        </div>
             <br />
             </>
    })

    const userGroupCards = userGroups.map(userGroup => {
        return <>
         <div>
             <Grid.Column>
                <UserGroupCard userGroup={userGroup} key={userGroup.id} groups={groups} setCurrentGroup={setCurrentGroup} currentGroup={currentGroup} currentUser={currentUser} setCurrentUser={setCurrentUser} />
             </Grid.Column>
        </div>
             <br />
             </>
    })
    return(
        <div>
            <h2>Join Leagues</h2>
            <div>
            {isClicked === true ?
            <div>
                <Card className="card" centered>
                    <form type='submit' onSubmit={handleSubmitLeague}>
                        <br />
                    <Input 
                        onChange={handleLeagueName}
                        placeholder="League Name">
                    </Input>
                    {/* <input type="checkbox" id="checkbox" name="private" value="Private?" checked={isChecked} onChange={handleChecked} />Private? */}
                    <br />
                    <br />
                    <Button className="ui primary button" >Submit League</Button>
                    </form>
                    <br />
                    <Button onClick={handleCancel}>Cancel</Button>
                </Card>
            </div>
            : 
            <Button className="ui secondary button" onClick={handleClick}>
                Create New League
            </Button>}
            <br />
            <br />
            <br />
            <Grid container columns={3}>   
            {groupCards}
            </Grid> 
            </div>
            <br />
            <br />
            <br />
            <div>
                <h2>My Leagues</h2>
                <br />
                <Grid container columns={3}>
                {userGroupCards}
                </Grid>
            </div>
        </div>
    )
}

export default Home