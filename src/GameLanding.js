import React from 'react';
import { Link } from 'react-router-dom';

import './GameLanding.css'

export default function GameLanding() {
    return (
        <>
            <div className="gameLandingIntro">
                <p className="gameLandingIntro gameLandingIntro--header">
                    Rock Paper Scissors Lizard Spock™
                </p>
                <p className="gameLandingIntro gameLandingIntro--description">
                    Because three options weren't enough, were they?
                </p>
            </div>
            <div className="gameModes">
                <p className="gameLandingGeneralContent">
                    <span>
                        Do you feel like challenging the Matrix? Pick this mode then!
                    </span>
                    <Link to="/singleplayer" className="gameModeButton gameModeButton--single">SinglePlayer Mode</Link>
                </p>
                <p className="gameLandingGeneralContent">
                    <span>
                        Or do you feel like punching a friend in the nose? Then try this one!
                    </span>
                    <Link to="/multiplayer" className="gameModeButton gameModeButton--multi">MultiPlayer Mode</Link>
                </p>
            </div>
        </>
    );
}