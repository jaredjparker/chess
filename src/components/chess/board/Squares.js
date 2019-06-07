import React, { Component } from 'react';
import './Squares.css';
import pawnDk from '../../../assets/Chess_pdt60.png';
import pawnLt from '../../../assets/Chess_plt60.png';
import bishopDk from '../../../assets/Chess_bdt60.png';
import bishopLt from '../../../assets/Chess_blt60.png';
import kingDk from '../../../assets/Chess_kdt60.png';
import kingLt from '../../../assets/Chess_klt60.png';
import knightDk from '../../../assets/Chess_ndt60.png';
import knightLt from '../../../assets/Chess_nlt60.png';
import queenDk from '../../../assets/Chess_qdt60.png';
import queenLt from '../../../assets/Chess_qlt60.png';
import rookDk from '../../../assets/Chess_rdt60.png';
import rookLt from '../../../assets/Chess_rlt60.png';


export default class Squares extends Component {
    constructor(props) {
      super(props);
      this.state = {
          selectedSquare: false
        };
    }
  
    handleClick = () => {
        this.setState({
            selectedSquare: !this.state.selectedSquare
        });
    }

    piecesPlacement( squareId ) {
        switch(squareId) {
            case 'd8':
              return <img src={kingDk} alt={'King Dark'} value={squareId} />;
            case 'd1':
              return <img src={kingLt} alt={'King Light'} value={squareId} />;
            case 'e8':
              return <img src={queenDk} alt={'Queen Dark'} value={squareId} />;
            case 'e1':
              return <img src={queenLt} alt={'Queen Light'} value={squareId} />;
            case 'c8':
            case 'f8':
              return <img src={bishopDk} alt={'Bishop Dark'} value={squareId} />;
            case 'c1':
            case 'f1':
              return <img src={bishopLt} alt={'Bishop Light'} value={squareId} />;
            case 'b8':
            case 'g8':
              return <img src={knightDk} alt={'Knight Dark'} value={squareId} />;
            case 'b1':
            case 'g1':
              return <img src={knightLt} alt={'Knight Light'} value={squareId} />;
            case 'a8':
            case 'h8':
              return <img src={rookDk} alt={'Rook Dark'} value={squareId} />;
            case 'a1':
            case 'h1':
              return <img src={rookLt} alt={'Rook Light'} value={squareId} />;
            case 'a7':
            case 'b7':
            case 'c7':
            case 'd7':
            case 'e7':
            case 'f7':
            case 'g7':
            case 'h7':
              return <img src={pawnDk} alt={'Pawn Dark'} value={squareId} />;
            case 'a2':
            case 'b2':
            case 'c2':
            case 'd2':
            case 'e2':
            case 'f2':
            case 'g2':
            case 'h2':
              return <img src={pawnLt} alt={'Pawn Light'} value={squareId} />;
            default:
                return <img src={''} alt={''} value={squareId} />
        }
      }
      
      

    render() {
        
        const { squareColor, oneLtrColumnId, snglDigRowId } = this.props;
          
        return (
            <div 
                onClick={this.handleClick}
                className={this.state.selectedSquare ? 'individual-square selected-square' : 'individual-square'} 
                style={{backgroundColor: squareColor}} 
                value={oneLtrColumnId.concat(snglDigRowId)}
            >
                <p className='square-id'>{oneLtrColumnId.concat(snglDigRowId)}</p>

                {this.piecesPlacement(oneLtrColumnId.concat(snglDigRowId))}
                
            </div>
        )
    }
}
