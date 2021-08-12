import {useState} from 'react'
function GameCard({game}){
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
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{game.away_team} vs. {game.home_team}</h2>
                    <h3>Make your pick!</h3>
                    <select value={selectedTeam} onChange={handleDropdown}>
                        <option>{game.away_team}</option>
                        <option>{game.home_team}</option>
                    </select>
                    <br />
                    <br />
                    <div> 
                        {isClicked ? <button onClick={handleChange}>Change your pick</button> : <button onClick={handlePick}>Submit Pick</button> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameCard