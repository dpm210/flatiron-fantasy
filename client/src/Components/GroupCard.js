import {useState, useEffect} from 'react'
import 'fomantic-ui-css/semantic.css';
import { Button, Card, Image, Grid } from 'semantic-ui-react'

import {Link} from 'react-router-dom'

function GroupCard({userGroup,group, setCurrentGroup, currentUser, setCurrentUser, joinGroupFilter}){
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
        window.location.reload(false);
        // joinGroupFilter(group.id)
    }

    return(
                    <div className='ui inverted segment' style={{marginBottom: "20px"}}>
                    <div className='ui inverted card'>
                    {/* <div className="card"> */}
                        {/* <Card.Group> */}
                            {/* <Card> */}
                                {/* <Card.Content> */}
                                    <div className='content'>
                                    <div className="card-body">
                                        <div className="center aligned header">
                                        <h3 className="card_text">{group.title}</h3>
                                        </div>
                                        <br />
                                        {/* <Link to='/group'> */}
                                        <Button inverted color='red' content='Red' onClick={handleClick}>Join League</Button>
                                        {/* </Link> */}
                                    </div>
                                    </div>
                                {/* </Card.Content> */}
                            {/* </Card> */}
                        {/* </Card.Group> */}
                    </div>
                    </div>
                    // </div>
    )
}

export default GroupCard