import {useEffect, useState} from 'react'
import { Card } from 'semantic-ui-react'
import { Grid, Image, Button, Icon, Modal } from 'semantic-ui-react'

function GameCard({game}){
    const [isClicked, setClicked] = useState(false)
    const [selectedTeam, setSelectedTeam] = useState(game.away_team)
    const [predictions, setPredictions] = useState([])
    
    // console.log(game.predictions)
    // console.log(selectedTeam)

    // useEffect(() => {
    //     fetch('http://localhost:3000/predictions')
    //     .then(res => res.json())
    //     .then(data => setPredictions(data))
    // },[])

    // console.log(predictions.map(pred => pred.pick).length > 1)

    function handleDropdown(e){
        setSelectedTeam(e.target.value)
        console.log(selectedTeam)
    }

    function handlePick(e){
        const groupId = localStorage.getItem("group_id")
        const userId = localStorage.getItem("user_id")
        setClicked(!isClicked)
        fetch('http://localhost:3000/predictions',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "user_id": userId,
                    "game_id": game.id,
                    "group_id": groupId,
                    "pick": selectedTeam
                }
                )
            })
            setClicked(!isClicked)

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
                {/* <Card.Group>
                    <Card>
                        <Card.Content> */}
                <div className='content'>
                <div className="card-body">
                <div className="center aligned header">
                    <h3 className="card-text">{game.away_team} vs. {game.home_team}</h3>
                    <h4>Make your pick!</h4>
                    <select className='ui dropdown' value={selectedTeam} onChange={handleDropdown}>
                        <option>{game.away_team}</option>
                        <option>{game.home_team}</option>
                    </select>
                    <br />
                    <br />
                    <div> 
                        {isClicked ? <Button onClick={handleChange}>Change your pick</Button> : <Button className="ui primary button" onClick={handlePick}>Submit Pick</Button> }
                    </div>
                    </div>
                </div>
                </div>
                    {/* </Card.Content> 
                </Card>
            </Card.Group> */}
            </div>
        </div>
    )
}

export default GameCard