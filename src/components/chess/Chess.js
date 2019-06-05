import React, { Component } from 'react';
import Board from './board/Board';
import './Chess.css';

export default class Chess extends Component {
    render() {
        return (
            <div>
                <h1>Chess</h1>
                <Board />
                
            </div>
        )
    }
}
