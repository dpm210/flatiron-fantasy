import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
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
            <Link to='/'>
            <button>Home</button>
            </Link>
            <Link to='/group'>
            <button>Leaderboard</button>
            </Link>
            <h1>Week 1 Games</h1>
            <div className="row">{gameCards}</div>
        </div>
    )
}

export default PickemsPage