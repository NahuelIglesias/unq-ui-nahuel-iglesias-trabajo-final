import React, {useState} from 'react';
import Navbar from './Navbar'
import './SinglePlayer.css'

const SinglePlayer = () => {
    const [player1, setPlayer1] = useState(undefined)
    const [player2, setPlayer2] = useState(undefined)

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function evaluateWinner() {
        if (player1 === undefined) {
            return (<div className="singleResult"/>)
        } else if (player1 === player2) {
            return (
                <div className="singleResult singleResult--tie">
                    <p>You've tied, huh? Well isn't that boring</p>
                </div>
            )
        } else if (player1Wins()) {
            return (
                <div className="singleResult singleResult--win">
                    <p>You've won! Finally!</p>
                </div>
            )
        } else {
            return (
                <div className="singleResult singleResult--lose">
                    <p>You've lost... Well, are you just gonna give up?</p>
                    <p>Do not show weakness, or the machines will get us</p>
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

    function playersChoices() {
        if (player1 === undefined) {
            return(
                <div className="singleGeneralContent">
                    <p>You haven't chosen a move yet...</p>
                </div>)
        } else {
            return (
                <div className="singleGeneralContent">
                    <p>You have chosen {numberToMovement(player1)}, and totally not Skynet has chosen {numberToMovement(player2)}</p>
                </div>
            )
        }
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

    const handleChoice = event => {
        let move = parseInt(event.target.name)
        setPlayer1(move)
        setPlayer2(getRndInteger(0, 4))
    }

    return (
        <>
            <Navbar />
            <div className="singleIntro">
                <p className="singleIntro singleIntro--header">
                    Rock Paper Scissors Lizard Spock™
                </p>
                <p className="singleIntro singleIntro--description">
                    Because three options weren't enough, were they?
                </p>
            </div>

            <div className="singleGeneralContent">
                <p>
                    Choose your move
                </p>
            </div>
            <div className="singleMovements">
                <img src={process.env.PUBLIC_URL + '/roca.png'} className="singleIcon" alt="Rock" name="2" onClick={handleChoice}/>
                <img src={process.env.PUBLIC_URL + '/papel.png'} className="singleIcon" alt="Paper" name="1" onClick={handleChoice}/>
                <img src={process.env.PUBLIC_URL + '/tijeras.png'} className="singleIcon" alt="Scissors" name="0" onClick={handleChoice}/>
                <img src={process.env.PUBLIC_URL + '/lagartija.png'} className="singleIcon" alt="Lizard" name="3" onClick={handleChoice}/>
                <img src={process.env.PUBLIC_URL + '/spock.png'} className="singleIcon" alt="Spock" name="4" onClick={handleChoice}/>
            </div>
            {playersChoices()}
            {evaluateWinner()}
        </>
    );
}

export default SinglePlayer;