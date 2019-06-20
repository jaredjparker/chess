import React, { Component } from 'react';
import Row from './Row';
import './Board.css';

const rowNumberArr=['8', '7', '6', '5', '4', '3', '2', '1']

export default class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedPiece: '',
            legalMoves: []
        }
    }

    activePiece = (squareId) => {
        this.setState({
            selectedPiece: squareId
        })
    }

    populateViableMoves = () => {
        const boardLegalMoves = ['e3', 'e4'];
        this.setState({ legalMoves: boardLegalMoves });
        return boardLegalMoves;
    }

    render() {
        return (
            <div className="board-wrapper">
                {rowNumberArr.map((rowId, i) => (
                    <Row 
                    key={i}
                    rowLegalMoves={this.populateViableMoves}
                    rowStatefulMoves={this.state.legalMoves}
                    sendSelectedPiece={this.activePiece}
                    numberedRowStr={rowId}
                    rowColorBool={parseInt(rowId, 10) % 2 === 0}
                    boardClkFnctn={this.handleClick}
                     />
                ))}
            </div>
        )
    }
}
