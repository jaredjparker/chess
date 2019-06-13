import initialState from '../centralState/gameState';
import boardValues from '../centralState/boardValues';

import Pawn_Dark from '../assets/Chess_pdt60.png';
import Pawn_Light from '../assets/Chess_plt60.png';
import Bishop_Dark from '../assets/Chess_bdt60.png';
import Bishop_Light from '../assets/Chess_blt60.png';
import King_Dark from '../assets/Chess_kdt60.png';
import King_Light from '../assets/Chess_klt60.png';
import Knight_Dark from '../assets/Chess_ndt60.png';
import Knight_Light from '../assets/Chess_nlt60.png';
import Queen_Dark from '../assets/Chess_qdt60.png';
import Queen_Light from '../assets/Chess_qlt60.png';
import Rook_Dark from '../assets/Chess_rdt60.png';
import Rook_Light from '../assets/Chess_rlt60.png';
import Empty from '../assets/Empty.png';

// ACTION CREATORS
export function switchPlayerMove() {
    initialState.playerOneMove = !initialState.playerOneMove;
    console.log(`It is player one's turn ${initialState.playerOneMove}`);
}

export function movePiece() {
    boardValues.d2 = Empty;
    boardValues.d4 = Pawn_Light;
    return true
}

export function validSquareSelect(squareData) {
    let snip = squareData.length;

    if (initialState.playerOneMove === true && squareData.includes('Light') && initialState.squareSelected === '') {
        console.log('Valid Square has been seleceted.')
        initialState.squareSelected = squareData.substring(snip - 2)
        initialState.moveOpen = true
        return initialState.squareSelected
    } 
    else if (initialState.playerOneMove === false && squareData.includes('Dark') && initialState.squareSelected === '') {
        console.log('Valid Square has been seleceted.')
        initialState.squareSelected = squareData.substring(snip - 2)
        initialState.moveOpen = true
        return initialState.squareSelected
    } 
    else if (initialState.squareSelected === squareData.substring(snip - 2)) {
        console.log('Square has been unselected')
        initialState.moveOpen = false
        initialState.squareSelected = ''
        return true
    } 
        
}