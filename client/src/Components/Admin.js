import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import AdminCard from './AdminCard'

function Admin(){
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/games/')
        .then(res => res.json())
        .then(gameData => setGames(gameData))
      }, [])
    console.log(games)

    const adminCards = games.map(game => {
        return <>
         <div className="col-3" style={{ marginBottom: '20px',  }}>
             <AdminCard game={game} key={game.id} />
             </div>
             <br />
             </>
    })
    return(
        <div>
            <Link to='/'>
            <button>Home</button>
            </Link>
            <h1>Week 1 Games</h1>
            <div>
            <div className="row">{adminCards}</div>
            </div>
        </div>
    )
}

export default Admin