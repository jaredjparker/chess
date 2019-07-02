import React, { Component } from 'react'
import Squares from './Squares';
import './Row.css';

    const whiteRowArr = ['#eae9d2', '#4b7399','#eae9d2', '#4b7399','#eae9d2', '#4b7399','#eae9d2', '#4b7399'];
    const blackRowArr = ['#4b7399','#eae9d2', '#4b7399','#eae9d2', '#4b7399','#eae9d2', '#4b7399', '#eae9d2'];
    const columnId = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

export default class Row extends Component {

    constructor(props) {
        super(props);

        this.state = {
            colorBool: this.props.rowColorBool,
        }
    }

    render() {
        return (
            <div className='individual-row'>
                {columnId.map((id, i) => (
                    <Squares 
                    key={i}
                    squareSendSelectedPiece={this.props.sendSelectedPiece}
                    squareStatefulMoves={this.props.rowStatefulMoves}
                    squareLegalMoves={this.props.rowLegalMoves}
                    snglDigRowId={this.props.numberedRowStr}
                    squareColor={this.state.colorBool === true ? whiteRowArr[i] : blackRowArr[i]} 
                    oneLtrColumnId={id} />
                ))}
            </div>
        )
    }
}
