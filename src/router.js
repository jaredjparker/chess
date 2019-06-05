import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './components/home/Home.js';
import Chess from './components/chess/Chess.js';

export default (
    <HashRouter>
        <div>
            <Route component={Home} exact path='/' />
            <Route component={Chess} path='/chess' />
        </div>
    </HashRouter>
)