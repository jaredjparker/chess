import React, { Component } from 'react'
import Squares from './Squares';
import './Row.css';

    const whiteRowArr = ['#eeeed2', '#769656','#eeeed2', '#769656','#eeeed2', '#769656','#eeeed2', '#769656'];
    const blackRowArr = ['#769656','#eeeed2', '#769656','#eeeed2', '#769656','#eeeed2', '#769656', '#eeeed2'];
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
                    snglDigRowId={this.props.numberedRowStr}
                    squareColor={this.state.colorBool === true ? whiteRowArr[i] : blackRowArr[i]} 
                    oneLtrColumnId={id} />
                ))}
            </div>
        )
    }
}
