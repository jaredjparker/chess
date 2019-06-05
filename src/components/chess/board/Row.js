import React, { Component } from 'react'
import Squares from './Squares';
import './Row.css';

    const whiteRowArr = ['white', 'black','white', 'black','white', 'black','white', 'black'];
    const blackRowArr = ['black','white', 'black','white', 'black','white', 'black', 'white'];
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
            <div>
                {columnId.map((id, i) => (
                    <Squares 
                    key={i}
                    snglDigRowId={this.props.numberedRowStr}
                    squareColor={this.state.colorBool === true ? whiteRowArr[i] : blackRowArr[i]} 
                    oneLtrColumnId={id} />
                ))}
            </div>
        )
    }
}
