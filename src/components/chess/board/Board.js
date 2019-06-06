import React, { Component } from 'react';
import Row from './Row';
import './Board.css';

const rowNumberArr=['8', '7', '6', '5', '4', '3', '2', '1']

export default class Board extends Component {
    render() {
        return (
            <div className="board-wrapper">
                {rowNumberArr.map((rowId, i) => (
                    <Row 
                    key={i}
                    numberedRowStr={rowId}
                    rowColorBool={parseInt(rowId, 10) % 2 === 0} />
                ))}
                
            </div>
        )
    }
}
