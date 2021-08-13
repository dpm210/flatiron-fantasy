import {useState, useEffect} from 'react'
import { Button, Card, Image, Grid } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

function GroupCard({userGroup,group, setCurrentGroup, currentUser, setCurrentUser}){
    // console.log(currentUser)

    function handleClick(){
        const userId = localStorage.getItem('user_id')
        fetch('http://localhost:3000/user_groups', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "user_id": userId,
                "group_id": group.id,
                "total_points": 0
            })
        })
        localStorage.setItem('group_id', group.id)
        localStorage.setItem('group_title', group.title)
        // joinGroupFilter(group.id)
    }

    return(

                    <div className="card">
                        <Grid columns={3} divided>
                        <Grid.Row>
                            <Grid.Column>
                        <Card.Group>
                            <Card>
                                <Card.Content>
                                    <div className="card-body">
                                        <Card.Header>{group.title}</Card.Header>
                                        <Link to='/group'>
                                        <Button basic color='red' content='Red' onClick={handleClick}>Join League</Button>
                                        </Link>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                        </Grid.Column>
                        </Grid.Row>
                        </Grid>
                    </div>
    )
}

export default GroupCard