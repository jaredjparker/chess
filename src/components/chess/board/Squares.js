import React, { Component } from 'react';
import { validSquareSelect, unselectSquare, checkSelectedSquare, resetOpenMove, resetPieceSelected, replacePieceHeld, releasePiece, handleValidSquareMove, passHoveringSquareInfo, addToClickHistory } from '../../../actions/gameActions';
import boardValues from '../../../centralState/boardValues';
import initialState from '../../../centralState/initialState';
import './Squares.css';


export default class Squares extends Component {
    constructor(props) {
      super(props);

      const { oneLtrColumnId, snglDigRowId } = this.props;

      const stateSquareId = `${oneLtrColumnId}${snglDigRowId}`;
      const chessPiece = `${oneLtrColumnId}${snglDigRowId}SquareInfo`;

      this.state = {
          selectedSquare: false,
          squareInfo: '',
          currentPiece: boardValues[chessPiece],
          squareImage: boardValues[stateSquareId],
          rowId: snglDigRowId,
          columnId: oneLtrColumnId,
          squareId: stateSquareId,
          selectedForMove: false
        };
    }

    componentDidMount() {
      this.props.squareLegalMoves();
      const squareId = `${this.props.oneLtrColumnId}${this.props.snglDigRowId}`;
        switch(squareId) {
          case 'd8':
            return this.setState({ squareInfo: `King_Dark ${squareId}`});
          case 'd1':
            return this.setState({ squareInfo: `King_Light ${squareId}`});
          case 'e8':
            return this.setState({ squareInfo: `Queen_Dark ${squareId}`});
          case 'e1':
            return this.setState({ squareInfo: `Queen_Light ${squareId}`});
          case 'c8':
          case 'f8':
            return this.setState({ squareInfo: `Bishop_Dark ${squareId}`});
          case 'c1':
          case 'f1':
            return this.setState({ squareInfo: `Bishop_Light ${squareId}`});
          case 'b8':
          case 'g8':
            return this.setState({ squareInfo: `Knight_Dark ${squareId}`});
          case 'b1':
          case 'g1':
            return this.setState({ squareInfo: `Knight_Light ${squareId}`});
          case 'a8':
          case 'h8':
            return this.setState({ squareInfo: `Rook_Dark ${squareId}`});
          case 'a1':
          case 'h1':
            return this.setState({ squareInfo: `Rook_Light ${squareId}`});
          case 'a7':
          case 'b7':
          case 'c7':
          case 'd7':
          case 'e7':
          case 'f7':
          case 'g7':
          case 'h7':
            return this.setState({ squareInfo: `Pawn_Dark ${squareId}`});
          case 'a2':
          case 'b2':
          case 'c2':
          case 'd2':
          case 'e2':
          case 'f2':
          case 'g2':
          case 'h2':
            return this.setState({ squareInfo: `Pawn_Light ${squareId}`});
          default:
              return this.setState({ squareInfo: `Empty ${squareId}`});
      }
    }
  
    handleMouseEnter = () => {
      const { squareInfo, squareId } = this.state;

      passHoveringSquareInfo(squareInfo)
      validSquareSelect(squareInfo, squareId) ? this.setState({selectedSquare: true}) : console.log('Invalid Selection');

      this.setState({
        squareImage: boardValues[squareId],
        currentPiece: boardValues[`${squareId}SquareInfo`]
      })
    }

    handleMouseLeave = () => {
      unselectSquare();
      this.setState({selectedSquare: false})
    }

    handleClick = () => {
      const { selectedForMove, selectedSquare, squareInfo, squareId } = this.state
      const clickHistLngth = initialState.clickHistory.length

      if (selectedForMove === false && initialState.pieceSelected !== squareInfo && initialState.moveOpen === false) {
        this.props.squareSendSelectedPiece(squareInfo)
        checkSelectedSquare(squareInfo, squareId) ? this.setState({selectedForMove: true, selectedSquare: false, squareImage: boardValues[squareId], currentPiece: boardValues[`${squareId}SquareInfo`], squareInfo: boardValues[`${squareId}SquareInfo`]}) : alert('Please select a valid square')
        addToClickHistory(squareId)
      } else if (selectedForMove === true && selectedSquare === false && initialState.clickHistory[clickHistLngth - 1] === squareId) {
        // console.log('Piece has been unselected')
        resetOpenMove()
        resetPieceSelected()
        replacePieceHeld(squareId)
        releasePiece()
        addToClickHistory(squareId)
        this.setState({
          selectedForMove: false,
          selectedSquare: true,
          squareImage: boardValues[squareId],
          currentPiece: boardValues[`${squareId}SquareInfo`],
          squareInfo: boardValues[`${squareId}SquareInfo`]
        })
      } else if ( initialState.clickHistory[clickHistLngth - 1] !== squareId && initialState.moveOpen === true) {
        // console.log('Piece has been moved')
        handleValidSquareMove(squareId)
        addToClickHistory(squareId)
        this.setState({
          selectedForMove: false,
          selectedSquare: true,
          squareImage: boardValues[squareId],
          currentPiece: boardValues[`${squareId}SquareInfo`], 
          squareInfo: boardValues[`${squareId}SquareInfo`],
        })
      }
    }

    piecesPlacement( squareId ) {
      const { squareImage, currentPiece } = this.state;

      switch(squareId) {
          case 'd8':
            return <img style={currentPiece.includes('Empty') ? {opacity: 0} : {opacity: 1}} alt={`King Dark ${squareId}`} value={squareId} src={squareImage} />;
          case 'd1':
            return <img style={currentPiece.includes('Empty') ? {opacity: 0} : {opacity: 1}} alt={`King Light ${squareId}`} value={squareId} src={squareImage} />;
          case 'e8':
            return <img style={currentPiece.includes('Empty') ? {opacity: 0} : {opacity: 1}} alt={`Queen Dark ${squareId}`} value={squareId} src={squareImage} />;
          case 'e1':
            return <img style={currentPiece.includes('Empty') ? {opacity: 0} : {opacity: 1}} alt={`Queen Light ${squareId}`} value={squareId} src={squareImage} />;
          case 'c8':
          case 'f8':
            return <img style={currentPiece.includes('Empty') ? {opacity: 0} : {opacity: 1}} alt={`Bishop Dark ${squareId}`} value={squareId} src={squareImage} />;
          case 'c1':
          case 'f1':
            return <img style={currentPiece.includes('Empty') ? {opacity: 0} : {opacity: 1}} alt={`Bishop Light ${squareId}`} value={squareId} src={squareImage} />;
          case 'b8':
          case 'g8':
            return <img style={currentPiece.includes('Empty') ? {opacity: 0} : {opacity: 1}} alt={`Knight Dark ${squareId}`} value={squareId} src={squareImage} />;
          case 'b1':
          case 'g1':
            return <img style={currentPiece.includes('Empty') ? {opacity: 0} : {opacity: 1}} alt={`Knight Light ${squareId}`} value={squareId} src={squareImage} />;
          case 'a8':
          case 'h8':
            return <img style={currentPiece.includes('Empty') ? {opacity: 0} : {opacity: 1}} alt={`Rook Dark ${squareId}`} value={squareId} src={squareImage} />;
          case 'a1':
          case 'h1':
            return <img style={currentPiece.includes('Empty') ? {opacity: 0} : {opacity: 1}} alt={`Rook Light ${squareId}`} value={squareId} src={squareImage} />;
          case 'a7':
          case 'b7':
          case 'c7':
          case 'd7':
          case 'e7':
          case 'f7':
          case 'g7':
          case 'h7':
            return <img style={currentPiece.includes('Empty') ? {opacity: 0} : {opacity: 1}} alt={`Pawn Dark ${squareId}`} value={squareId} src={squareImage} />;
          case 'a2':
          case 'b2':
          case 'c2':
          case 'd2':
          case 'e2':
          case 'f2':
          case 'g2':
          case 'h2':
            return <img style={currentPiece.includes('Empty') ? {opacity: 0} : {opacity: 1}} alt={`Pawn Light ${squareId}`} value={squareId} src={squareImage} />;
          default:
              return <img style={currentPiece.includes('Empty') ? {opacity: 0} : {opacity: 1}} alt={`Empty ${squareId}`} value={squareId} src={squareImage} />
      }
    }
      
    render() {
        
        const { squareColor, oneLtrColumnId, snglDigRowId } = this.props;
        const { selectedSquare } = this.state;
          
        return (
            <div 
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onClick={this.handleClick}
                className={selectedSquare ? 'individual-square selected-square' : 'individual-square'} 
                style={{backgroundColor: squareColor}} 
                value={`${oneLtrColumnId}${snglDigRowId}`}
            >
                {/* <p>{`${oneLtrColumnId}${snglDigRowId}`}</p> */}

                {this.piecesPlacement(`${oneLtrColumnId}${snglDigRowId}`)}
                
            </div>
        )
    }
}