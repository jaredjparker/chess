import React, { Component } from 'react';
import { validSquareSelect } from '../../../actions/gameActions';
import './Squares.css';
import pawnDk from '../../../assets/Chess_pdt60.png';
import pawnLt from '../../../assets/Chess_plt60.png';
import bishopDk from '../../../assets/Chess_bdt60.png';
import bishopLt from '../../../assets/Chess_blt60.png';
import King_Dark from '../../../assets/Chess_kdt60.png';
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
      
      const stateSquareId = this.props.oneLtrColumnId.concat(this.props.snglDigRowId);

      this.state = {
          selectedSquare: false,
          squareInfo: '',
          squareImage: '',
          rowId: this.props.snglDigRowId,
          columnId: this.props.oneLtrColumnId,
          squareId: stateSquareId
        };
    }

    componentDidMount() {
      const squareId = this.props.oneLtrColumnId.concat(this.props.snglDigRowId);
        switch(squareId) {
          case 'd8':
            return this.setState({ squareInfo: `King_Dark ${squareId}`, squareImage: King_Dark});
          case 'd1':
            return this.setState({ squareInfo: `King Light ${squareId}`, squareImage: kingLt});
          case 'e8':
            return this.setState({ squareInfo: `Queen Dark ${squareId}`, squareImage: queenDk});
          case 'e1':
            return this.setState({ squareInfo: `Queen Light ${squareId}`, squareImage: queenLt});
          case 'c8':
          case 'f8':
            return this.setState({ squareInfo: `Bishop Dark ${squareId}`, squareImage: bishopDk});
          case 'c1':
          case 'f1':
            return this.setState({ squareInfo: `Bishop Light ${squareId}`, squareImage: bishopLt});
          case 'b8':
          case 'g8':
            return this.setState({ squareInfo: `Knight Dark ${squareId}`, squareImage: knightDk});
          case 'b1':
          case 'g1':
            return this.setState({ squareInfo: `Knight Light ${squareId}`, squareImage: knightLt});
          case 'a8':
          case 'h8':
            return this.setState({ squareInfo: `Rook Dark ${squareId}`, squareImage: rookDk});
          case 'a1':
          case 'h1':
            return this.setState({ squareInfo: `Rook Light ${squareId}`, squareImage: rookLt});
          case 'a7':
          case 'b7':
          case 'c7':
          case 'd7':
          case 'e7':
          case 'f7':
          case 'g7':
          case 'h7':
            return this.setState({ squareInfo: `Pawn Dark ${squareId}`, squareImage: pawnDk});
          case 'a2':
          case 'b2':
          case 'c2':
          case 'd2':
          case 'e2':
          case 'f2':
          case 'g2':
          case 'h2':
            return this.setState({ squareInfo: `Pawn Light ${squareId}`, squareImage: pawnLt});
          default:
              return this.setState({ squareInfo: `Empty ${squareId}`, squareImage: ''});
      }

    }
  
    handleClick = () => {
      validSquareSelect(this.state.squareInfo) ? this.setState({selectedSquare: !this.state.selectedSquare}) : console.log('Invalid Selection');
        
    }

    piecesPlacement( squareId ) {
      const { squareImage } = this.state;

        switch(squareId) {
            case 'd8':
              return <img alt={`King Dark ${squareId}`} value={squareId} src={squareImage} />;
            case 'd1':
              return <img alt={`King Light ${squareId}`} value={squareId} src={squareImage} />;
            case 'e8':
              return <img alt={`Queen Dark ${squareId}`} value={squareId} src={squareImage} />;
            case 'e1':
              return <img alt={`Queen Light ${squareId}`} value={squareId} src={squareImage} />;
            case 'c8':
            case 'f8':
              return <img alt={`Bishop Dark ${squareId}`} value={squareId} src={squareImage} />;
            case 'c1':
            case 'f1':
              return <img alt={`Bishop Light ${squareId}`} value={squareId} src={squareImage} />;
            case 'b8':
            case 'g8':
              return <img alt={`Knight Dark ${squareId}`} value={squareId} src={squareImage} />;
            case 'b1':
            case 'g1':
              return <img alt={`Knight Light ${squareId}`} value={squareId} src={squareImage} />;
            case 'a8':
            case 'h8':
              return <img alt={`Rook Dark ${squareId}`} value={squareId} src={squareImage} />;
            case 'a1':
            case 'h1':
              return <img alt={`Rook Light ${squareId}`} value={squareId} src={squareImage} />;
            case 'a7':
            case 'b7':
            case 'c7':
            case 'd7':
            case 'e7':
            case 'f7':
            case 'g7':
            case 'h7':
              return <img alt={`Pawn Dark ${squareId}`} value={squareId} src={squareImage} />;
            case 'a2':
            case 'b2':
            case 'c2':
            case 'd2':
            case 'e2':
            case 'f2':
            case 'g2':
            case 'h2':
              return <img alt={`Pawn Light ${squareId}`} value={squareId} src={squareImage} />;
            default:
                return <img alt={''} value={squareId} src={''} />
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