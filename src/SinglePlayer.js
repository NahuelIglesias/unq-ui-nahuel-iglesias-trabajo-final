import React, {useState, useEffect} from 'react';
import './SinglePlayer.css'

const SinglePlayer = () => {
    const [player1, setPlayer1] = useState(undefined)
    const [player2, setPlayer2] = useState(undefined)

    useEffect (() => {
        setPlayer2(getRndInteger(0, 4))
        //setPlayer2(0) //para pruebas
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
                    <p>You've tied, huh? Well isn't that boring. Just try again</p>
                </div>
            )
        } else if (player1Wins()) {
            return (
                <div className="result result--win">
                    <p>You've won! Finally!</p>
                </div>
            )
        } else {
            return (
                <div className="result result--lose">
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
                <div className="generalContent">
                    <p>You haven't chosen a move yet...</p>
                </div>)
        } else {
            return (
                <div className="generalContent">
                    <p>You have chosen {numberToMovement(player1)}, and Totally not Skynet has chosen {numberToMovement(player2)}</p>
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

    function handleChoice0() {
        setPlayer1(0)
        setPlayer2(getRndInteger(0, 4))
        //setPlayer2(0) //para pruebas
    }
    function handleChoice1() {
        setPlayer1(1)
        setPlayer2(getRndInteger(0, 4))
        //setPlayer2(0) //para pruebas
    }
    function handleChoice2() {
        setPlayer1(2)
        setPlayer2(getRndInteger(0, 4))
        //setPlayer2(0) //para pruebas
    }
    function handleChoice3() {
        setPlayer1(3)
        setPlayer2(getRndInteger(0, 4))
        //setPlayer2(0) //para pruebas
    }
    function handleChoice4() {
        setPlayer1(4)
        setPlayer2(getRndInteger(0, 4))
        //setPlayer2(0) //para pruebas
    }

    return (
        <>
            <div className="intro">
                <p className="intro intro--header">
                    Rock Paper Scissors Lizard Spock™
                </p>
                <p className="intro intro--description">
                    Because three options weren't enough, were they?
                </p>
            </div>
            <div className="generalContent">
                <p>
                    Choose your move
                </p>
            </div>
            <div className="movements">
                <img src={process.env.PUBLIC_URL + '/roca.png'} className="icon" alt="Rock" name="2" onClick={handleChoice2}/>
                <img src={process.env.PUBLIC_URL + '/papel.png'} className="icon" alt="Paper" name="1" onClick={handleChoice1}/>
                <img src={process.env.PUBLIC_URL + '/tijeras.png'} className="icon" alt="Scissors" name="0" onClick={handleChoice0}/>
                <img src={process.env.PUBLIC_URL + '/lagartija.png'} className="icon" alt="Lizard" name="3" onClick={handleChoice3}/>
                <img src={process.env.PUBLIC_URL + '/spock.png'} className="icon" alt="Spock" name="4" onClick={handleChoice4}/>
            </div>
            {playersChoices()}
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

/*
<img src={process.env.PUBLIC_URL + '/roca.png'} className="icon" alt="Rock" onClick={setPlayer1(2)}/>
<img src={process.env.PUBLIC_URL + '/papel.png'} className="icon" alt="Paper" onClick={setPlayer1(1)}/>
<img src={process.env.PUBLIC_URL + '/tijeras.png'} className="icon" alt="Scissors" onClick={setPlayer1(0)}/>
<img src={process.env.PUBLIC_URL + '/lagartija.png'} className="icon" alt="Lizard" onClick={setPlayer1(3)}/>
<img src={process.env.PUBLIC_URL + '/spock.png'} className="icon" alt="Spock" onClick={setPlayer1(4)}/>
*/