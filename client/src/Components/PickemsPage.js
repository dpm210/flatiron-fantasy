import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import GameCard from './GameCard'
import { Button, Card, Image, Grid } from 'semantic-ui-react'


function PickemsPage({groups}){
    const [games, setGames] = useState([])
    const groupTitle = localStorage.getItem('group_title')

    useEffect(() => {
        fetch('http://localhost:3000/games/')
        .then(res => res.json())
        .then(gameData => setGames(gameData))
      }, [])

    const gameCards = games.map(game => {
        return <>
            <Grid.Column>
             <GameCard game={game} key={game.id} />
             </Grid.Column>
             <br />
             </>
    })
    return(
        <div>
            <br />
            <Link to='/group'>
            <Button> League Leaderboard</Button>
            </Link>
            <h1 className="league_group">{groupTitle}</h1>
            <h1 className="league_group">Week 1 Games</h1>
            <Grid container columns={3}>
            {gameCards}
            </Grid>
        </div>
    )
}

export default PickemsPage