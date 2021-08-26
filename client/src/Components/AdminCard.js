import {useState} from 'react'
import { Card, Grid, Image, Button, Icon, Modal } from 'semantic-ui-react'


function AdminCard({game}){
    // console.log(game)
    const [isClicked, setClicked] = useState(false)
    const [selectedTeam, setSelectedTeam] = useState(game.away_team)

    console.log(selectedTeam)

    function handleDropdown(e){
        setSelectedTeam(e.target.value)
        console.log(selectedTeam)
    }

    function handlePick(e){
        const groupId = localStorage.getItem("group_id")
        const userId = localStorage.getItem("user_id")
        setClicked(!isClicked)
        fetch(`http://localhost:3000/games/${game.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "winning_team": selectedTeam
                }
                )
            })
            setClicked(!isClicked)
            console.log(game.winning_team)
        }

        function handleChange(){
            fetch(`http://localhost:3000/predictions/${game.id}`,{
            method: 'DELETE'
        })
        setClicked(!isClicked)
        }

    return(
        <div>
        <div className='ui inverted segment' style={{marginBottom: "20px"}}>
        <div className='ui inverted card'></div>
            <div className="card">
                {/* <Card.Group> */}
                    {/* <Card> */}
                        {/* <Card.Content> */}
                        <div className='content'>
                             <div className="card-body">
                    <div className="center aligned header">
                        <h3 className='card-text'>{game.away_team} vs. {game.home_team}</h3>
                        </div>
                    <div>          
                    <h4 className="description">Select Winning Team</h4>
                    {isClicked ? <h4>{selectedTeam}</h4> : game.winning_team ? <h4>{selectedTeam}</h4> : 
                    <select className="ui dropdown" value={selectedTeam} onChange={handleDropdown}>
                        <option value="1">{game.away_team}</option>
                        <option value="0">{game.home_team}</option>
                    </select>  
                    }
                    </div>
                    </div>
                    <br />
                    <div>
                        {isClicked ? "Winning Team Selected!" : game.winning_team ? "Winning Team Selected!" : <div className="ui primary button" onClick={handlePick}>Save Winner</div> }
                    </div>
                    {/* </Card.Content> */}
                    {/* </Card> */}
                {/* </Card.Group> */}
            </div>
        </div>
        </div>
        </div>
    )
}

export default AdminCard