import {useEffect, useState} from 'react'
import GameCard from './GameCard'
function PickemsPage(){
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/games/')
        .then(res => res.json())
        .then(gameData => setGames(gameData))
      }, [])

    const gameCards = games.map(game => {
        return <>
         <div className="col-3" style={{ marginBottom: '20px',  }}>
             <GameCard game={game} key={game.id} />
             </div>
             <br />
             </>
    })
    return(
        <div>
            <div className="row">{gameCards}</div>
        </div>
    )
}

export default PickemsPage