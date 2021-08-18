import {useState} from 'react'

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
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{game.away_team} vs. {game.home_team}</h2>
                    <div>                 
                    <h3>Select Winning Team</h3>
                    <select value={selectedTeam} onChange={handleDropdown}>
                        <option>{game.away_team}</option>
                        <option>{game.home_team}</option>
                    </select>
                    </div>
                    <br />
                    <div>
                        {game.winning_team.length > 1 ? "Winning Team Selected!" : <button onClick={handlePick}>Submit Winner</button> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminCard