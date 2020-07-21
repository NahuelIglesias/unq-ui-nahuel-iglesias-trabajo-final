import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './MultiPlayer.css'

const MultiPlayer = () => {
    const [player1, setPlayer1] = useState(undefined)
    const [player2, setPlayer2] = useState(undefined)

    function evaluateWinner() {
        if (player1 === undefined) {
            return (<div className="multiResult"/>)
        } else if (player1 === player2) {
            return (
                <div className="multiResult multiResult--tie">
                    <p>You two have tied, huh? Well isn't that boring</p>
                </div>
            )
        } else if (player1Wins()) {
            return (
                <div className="multiResult multiResult--win">
                    <p>Congrats Player 1, you've won! Finally!</p>
                </div>
            )
        } else {
            return (
                <div className="multiResult multiResult--win">
                    <p>Congrats Player 2, you've won! Finally!</p>
                </div>
            )
        }
    }

    function player1Wins() {
        return (
            (player1 === 0 && (player2 === 1 || player2 === 3)) ||
            (player1 === 1 && (player2 === 2 || player2 === 4)) ||
            (player1 === 2 && (player2 === 3 || player2 === 0)) ||
            (player1 === 3 && (player2 === 4 || player2 === 1)) ||
            (player1 === 4 && (player2 === 0 || player2 === 2))
        )
    }

    function numberToMovement(n) {
        if (n === 0) {
            return 'Scissors'
        } else if (n === 1) {
            return 'Paper'
        } else if (n === 2) {
            return 'Rock'
        } else if (n === 3) {
            return 'Lizard'
        } else if (n === 4) {
            return 'Spock'
        }
    }

    function playersChoices() {
        return (
            <div className="multiGeneralContent">
                <p>Player 1 chose {numberToMovement(player1)} and Player 2 chose {numberToMovement(player2)}, so...</p>
            </div>
        )
    }

    const handleChoiceP1 = event => {
        let move = parseInt(event.target.name)
        setPlayer1(move)
    }

    const handleChoiceP2 = event => {
        let move = parseInt(event.target.name)
        setPlayer2(move)
    }

    const resetTurns = () => {
        setPlayer1(undefined)
        setPlayer2(undefined)
    }

    function handleTurns() {
        if (player1 === undefined) {
            return (
                <>
                    <div className="multiGeneralContent">
                        <p>
                            Player 1, choose your move
                        </p>
                        <p>
                            Player 2, no peeking. I know where you live
                        </p>
                    </div>
                    <div className="multiMovements">
                        <img src={process.env.PUBLIC_URL + '/roca.png'} className="multiIcon" alt="Rock" name="2" onClick={handleChoiceP1}/>
                        <img src={process.env.PUBLIC_URL + '/papel.png'} className="multiIcon" alt="Paper" name="1" onClick={handleChoiceP1}/>
                        <img src={process.env.PUBLIC_URL + '/tijeras.png'} className="multiIcon" alt="Scissors" name="0" onClick={handleChoiceP1}/>
                        <img src={process.env.PUBLIC_URL + '/lagartija.png'} className="multiIcon" alt="Lizard" name="3" onClick={handleChoiceP1}/>
                        <img src={process.env.PUBLIC_URL + '/spock.png'} className="multiIcon" alt="Spock" name="4" onClick={handleChoiceP1}/>
                    </div>
                </>
            )
        } else if (player2 === undefined) {
            return (
                <>
                    <div className="multiGeneralContent">
                        <p>
                            Time to choose your move, Player 2
                        </p>
                        <p>
                            Player 1, no peeking. I know where you live too
                        </p>
                    </div>
                    <div className="multiMovements">
                        <img src={process.env.PUBLIC_URL + '/roca.png'} className="multiIcon" alt="Rock" name="2" onClick={handleChoiceP2}/>
                        <img src={process.env.PUBLIC_URL + '/papel.png'} className="multiIcon" alt="Paper" name="1" onClick={handleChoiceP2}/>
                        <img src={process.env.PUBLIC_URL + '/tijeras.png'} className="multiIcon" alt="Scissors" name="0" onClick={handleChoiceP2}/>
                        <img src={process.env.PUBLIC_URL + '/lagartija.png'} className="multiIcon" alt="Lizard" name="3" onClick={handleChoiceP2}/>
                        <img src={process.env.PUBLIC_URL + '/spock.png'} className="multiIcon" alt="Spock" name="4" onClick={handleChoiceP2}/>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="multiGeneralContent multiGeneralContent--ending">
                        Ok, please do not punch each other now
                    </div>
                    {playersChoices()}
                    {evaluateWinner()}
                    <div className="multiGeneralContent">
                        <p> Wanna try again? </p>
                        <button className="multiResetButton" type="reset" onClick={resetTurns}>The "F*ck go back" button</button>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <div className="multiIntro">
                <p className="multiIntro multiIntro--header">
                    Rock Paper Scissors Lizard Spock™
                </p>
                <p className="multiIntro multiIntro--description">
                    Because three options weren't enough, were they?
                </p>
            </div>

            {handleTurns()}
        </>
    )

}

export default MultiPlayer;