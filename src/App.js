import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import GameLanding from './GameLanding.js'
import SinglePlayer from './SinglePlayer.js'
import MultiPlayer from './MultiPlayer.js'
import NotFoundPage from './NotFoundPage.js'
import './App.css';

export default class App extends React.Component{
    render(){
        return(
            <div className="App">
              <Router>
                  <Switch>            
                      <Route exact path= '/' component={GameLanding}/>
                      <Route exact path= '/singleplayer' component={SinglePlayer}/>
                      <Route exact path= '/multiplayer' component={MultiPlayer}/>
                      
                      <Route path='*'  component={NotFoundPage}/>
                  </Switch>
              </Router>
            </div>
          );
      }
}
