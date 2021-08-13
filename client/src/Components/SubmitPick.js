import {useState} from 'react'
function SubmitPick({game}){
    const [isClicked, setClicked] = useState(false)
    const [selectedTeam, setSelectedTeam] = useState(game.away_team)

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
            {isClicked ? <button onClick={handleChange}>Change your pick</button> : <button onClick={handlePick}>Submit Pick</button> }
        </div>
    )
}
export default SubmitPick