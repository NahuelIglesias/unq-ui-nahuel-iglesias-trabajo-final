import React, {useState, useEffect} from 'react';
import './SinglePlayer.css'

const SinglePlayer = () => {
    const [player1, setPlayer1] = useState(undefined)
    const [player2, setPlayer2] = useState(undefined)

    useEffect (() => {
        setPlayer2(getRndInteger(0, 4))
    }, []);

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function evaluateWinner() {
        if (player1 === undefined) {
            return (<div className="result"/>)
        } else if (player1 === player2) {
            return (
                <div className="result result--tie">
                    You... tied? Well isn't that boring. Just try again
                </div>
            )
        } else if ((player1+1 === player2) || (player1+3 === player2)) {
            return (
                <div className="result result--win">
                    You won! Finally
                </div>
            )
        } else {
            return (
                <div className="result result--win">
                    You lost... Well, are you just gonna give up? That's how Skynet took over
                </div>
            )
        }
    }

    /*function numberToMovement(n) {
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
    }*/

    return (
        <>
            <div className="intro">
                <p className="intro intro--header">
                    Rock Paper Scissors... Lizard Spock
                </p>
                <p className="intro intro--description">
                    Because three options weren't enough, were they?
                </p>
            </div>
            <div className="movements">
                <p>
                    <img src={process.env.PUBLIC_URL + '/roca.png'} width="45" height="45"/>Rock
                </p>
                <p>
                    <img src={process.env.PUBLIC_URL + '/papel.png'} width="45" height="45"/>Paper
                </p>
                <p>
                    <img src={process.env.PUBLIC_URL + '/tijeras.png'} width="45" height="45"/>Scissors
                </p>
                <p>
                    <img src={process.env.PUBLIC_URL + '/lagartija.png'} width="45" height="45"/>Lagartija
                </p>
                <p>
                    <img src={process.env.PUBLIC_URL + '/spock.png'} width="45" height="45"/>Spock
                </p>
            </div>
            {evaluateWinner()}
        </>
    );
}

export default SinglePlayer;

/*<button className="option" onClick={setPlayer1(2)}>Rock</button>
<button className="option" onClick={setPlayer1(1)}>Paper</button>
<button className="option" onClick={setPlayer1(0)}>Scissors</button>
<button className="option" onClick={setPlayer1(3)}>Lizard</button>
<button className="option" onClick={setPlayer1(4)}>Spock</button>*/