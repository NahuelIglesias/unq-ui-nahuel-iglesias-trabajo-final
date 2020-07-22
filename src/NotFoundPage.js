import React from 'react'
import { Link } from 'react-router-dom';
import './NotFoundPage.css'

export default function NotFoundPage() {
  
    return (
            <div className="notFoundPage">
                <p className="notFoundPage notFoundPageGeneralContent">
                    I'm sorry, Dave. I'm afraid i can't do that.
                </p>
                <Link to="/" className="notFoundPage notFoundPageButton">The other "F*ck go back" button</Link>
            </div>
    );
  }