import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Bola from './Bola';
import Gabon from './Gabon';

export default class Routes extends Component {
    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Bola} />
                        <Route path='/test' component={Gabon} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
