import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Header, Image, Table, Button } from 'semantic-ui-react'


function GroupPage({groups, currentGroup, setCurrentGroup}){
    const [newGroup, setNewGroup] = useState([])
    
    useEffect(() => {
        const groupId = localStorage.getItem('group_id')
        fetch(`http://localhost:3000/groups/${groupId}`)
        .then(res => res.json())
        .then(groupUsers => setNewGroup(groupUsers.user_groups))
    },[])
    
    console.log(newGroup)


const groupLeaderboard = newGroup.map(user =>
    <tr>
    <td>{user.user.username}</td>
    <td>{user.total_points}</td>
    </tr>
    )


    return(
        <div>
            <Link to='/'>
            <Button>Home</Button>
            </Link>
            <Link to='/pickems'>
            <Button>Week 1 Pick ems</Button>
            </Link>

        <h2>Leaderboard</h2>
        <Table verticalAlign='middle' basic='very' celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Username</Table.HeaderCell>
                        <Table.HeaderCell>Total Points</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4'>
                            <Header.Content>
                            {groupLeaderboard}
                            </Header.Content>
                            </Header>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>

    </Table>
     </div>
    )
}

export default GroupPage