import React, { Component } from 'react';
import './Squares.css';

export default class Squares extends Component {
    render() {
        return (
            <div 
                className='individual-square' 
                style={{backgroundColor: this.props.squareColor}} 
                value={this.props.oneLtrColumnId.concat(this.props.snglDigRowId)}
            >
                {this.props.oneLtrColumnId.concat(this.props.snglDigRowId)}
            </div>
        )
    }
}
