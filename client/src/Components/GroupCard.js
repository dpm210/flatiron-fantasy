import {useState, useEffect} from 'react'
import { Button, Card, Image, Grid } from 'semantic-ui-react'
function GroupCard({userGroup,group, setCurrentGroup, currentUser, setCurrentUser}){
    // console.log(currentUser)

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
                        <Grid columns={3} divided>
                        <Grid.Row>
                            <Grid.Column>
                        <Card.Group>
                            <Card>
                                <Card.Content>
                                    <div className="card-body">
                                        <Card.Header>{group.title}</Card.Header>
                                        <Button basic color='red' content='Red' onClick={handleClick}>Join League</Button>
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