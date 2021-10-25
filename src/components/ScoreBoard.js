import axios from 'axios'
import {useEffect, useState} from "react"

const randomUserNames = [
    'PurpleFish',
    'LankyLama',
    'SillySloth',
    'LizardEyes',
    'BlowBlizzard',
    'AnteaterEars',
    "BulbBear",
    'OstrichOar',
    'CamelLegs',
    'KolaKoala',
    'LionLives',
    'MouthyTiger'
]

const ScoreBoard = ({score}) => {
    const [gameStates, setGameStates] = useState(null)
    const [userName, setUserName] = useState(null)

    const fetchData = async () => {
        const response = await axios.get('http://localhost:8000/scores')
        const data = Object.keys(response.data.data).map(item => response.data.data[item])
        setGameStates(data)
    }

    console.log(gameStates)

    const saveData = () => {

        const data = {
            username: userName,
            score: score
        }
        axios.post('http://localhost:8000/addscore', data)
            .then(response => console.log(response))
            .catch(err => console.log(err))
            .then(fetchData)
    }

    useEffect(() => {
        fetchData()
        setUserName(randomUserNames[Math.floor(Math.random() * randomUserNames.length)])
    }, [])

    const descendingGameStates = gameStates?.sort((a,b) => b.score - a.score)

 return (
     <div className="score-board">
         <h2>{userName} score:{score}</h2>

         <h2>High Scores:</h2>
         {descendingGameStates?.map((gameState, index) => (
             <div key={index}>
                 <h3>{gameState.username}: {gameState.score}</h3>
             </div>
             ))}
         <button onClick={saveData}>save score</button>
     </div>
 )
}

export default ScoreBoard
