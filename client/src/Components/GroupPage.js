import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Header, Image, Table, Button } from 'semantic-ui-react'


function GroupPage({groups, currentGroup, setCurrentGroup}){
    const [newGroup, setNewGroup] = useState([])
    const groupTitle = localStorage.getItem('group_title')
    
    useEffect(() => {
        const groupId = localStorage.getItem('group_id')
        fetch(`http://localhost:3000/groups/${groupId}`)
        .then(res => res.json())
        .then(groupUsers => setNewGroup(groupUsers.user_groups))
    },[])
        console.log(newGroup)


const groupLeaderboard = newGroup.map(user =>
        <Table.Row>
                <Table.Cell>{user.user.username}</Table.Cell>
                <Table.Cell>{user.points}</Table.Cell>
        </Table.Row>
)


    return(
        <div>
            <Link to='/'>
            <Button>Home</Button>
            </Link>
            <Link to='/pickems'>
            <Button>Week 1 Pick ems</Button>
            </Link>
        <h2>{groupTitle}</h2>
        <h2>Leaderboard</h2>
        <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Username</Table.HeaderCell>
                        <Table.HeaderCell>Total Points</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {groupLeaderboard}
                </Table.Body>

    </Table>
     </div>
    )
}

export default GroupPage