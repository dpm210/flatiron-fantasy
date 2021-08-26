import {useState} from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Button, Card, Image, Grid } from 'semantic-ui-react'

function UserGroupCard({userGroup, groups, setCurrentGroup, currentGroup}){
// const history = useHistory();
// console.log(group)
function handleClick(){
    setCurrentGroup(userGroup)
    localStorage.setItem('group_id', userGroup.id)
    localStorage.setItem('group_title', userGroup.title)
    // history.push('/group')

    // console.log(userGroup)
}
// console.log(currentGroup)

    return(

        <div className='ui inverted segment'style={{marginBottom: "20px"}}>
        <div className='ui inverted card' >
                        {/* <Card.Group> */}
                            {/* <Card> */}
                                {/* <Card.Content> */}
                                <div className='content'>
                                    <div className="card-body">
                                        <div className="center aligned header">
                            <h3 className="card_text">{userGroup.title}</h3>
                            <Link to='/Group'>
                            <Button inverted color="blue" onClick={handleClick}>View League</Button>
                            </Link>
                        </div>
                                {/* </Card.Content> */}
                            {/* </Card> */}
                        {/* //  </Card.Group> */}
                    </div>
                    </div>
                    </div>
                    </div>
    )
}

export default UserGroupCard