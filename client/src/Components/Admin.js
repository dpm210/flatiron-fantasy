import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import AdminCard from './AdminCard'
import {Grid} from 'semantic-ui-react'

function Admin(){
    const [games, setGames] = useState([])

    document.title = 'Admin'

    useEffect(() => {
        fetch('http://localhost:3000/games/')
        .then(res => res.json())
        .then(gameData => setGames(gameData))
      }, [])
    console.log(games)

    const adminCards = games.map(game => {
        return <>
        <Grid.Column>
             <AdminCard game={game} key={game.id} />
             </Grid.Column>
             </>
    })
    return(
        <div>
            {/* <Link to='/'>
            <button>Home</button>
            </Link> */}
            <h1>Week 1 Games</h1>
            <div>
                <Grid container columns={3}>
                {adminCards}
                </Grid>
            </div>
        </div>
    )
}

export default Admin