import initialState from '../centralState/initialState';
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
    initialState.playerOneMove = !initialState.playerOneMove
    console.log(`It is player one's turn ${initialState.playerOneMove}`)
}

export function validSquareSelect(squareData, squareId) {

    if (initialState.playerOneMove === true && squareData.includes('Light') && initialState.squareSelected === '') {
        console.log('Hovering over Valid Square')
        initialState.squareSelected = squareId
        return initialState.squareSelected
    } 
    else if (initialState.playerOneMove === false && squareData.includes('Dark') && initialState.squareSelected === '') {
        console.log('Hovering over Valid Square')
        initialState.squareSelected = squareId
        return initialState.squareSelected
    } 
}

export function checkSelectedSquare(squareData, squareId) {
    if (initialState.playerOneMove === true && squareData.includes('Light') && initialState.squareSelected === squareId) {
        console.log('Valid Square has been seleceted.')
        openMove()
        pickUpPiece(squareId)
        holdPiece(squareData)
        initialState.pieceSelected = squareData
        return initialState.pieceSelected
    } 
    else if (initialState.playerOneMove === false && squareData.includes('Dark') && initialState.squareSelected === squareId) {
        console.log('Valid Square has been seleceted.')
        openMove()
        pickUpPiece(squareId)
        holdPiece(squareData)
        initialState.pieceSelected = squareData
        return initialState.pieceSelected
    } 
}

export function unselectSquare() {
    if (initialState.moveOpen === false) {initialState.squareSelected = ''}
}

export function openMove() {
    initialState.moveOpen = true
}

export function resetOpenMove() {
    initialState.moveOpen = false
}

export function resetPieceSelected() {
    initialState.pieceSelected = ''
}

export function pickUpPiece(squareId) {
    boardValues[squareId] = Empty
    boardValues[`${squareId}SquareInfo`] = 'Empty'
    return true
}

function holdPiece(squareInfo) {
    let imageName = squareInfo.split(' ')
    initialState.holdingPiece = imageName[0]
}

export function replacePieceHeld(squareId) {
    boardValues[squareId] = passImage(initialState.holdingPiece)
    boardValues[`${squareId}SquareInfo`] = initialState.holdingPiece
    return true
}

function passImage(heldPiece) {
    switch(heldPiece) {
        case 'King_Dark':
          return King_Dark;
        case 'King_Light':
          return King_Light;
        case 'Queen_Dark':
          return Queen_Dark;
        case 'Queen_Light':
          return Queen_Light;
        case 'Bishop_Dark':
          return Bishop_Dark;
        case 'Bishop_Light':
          return Bishop_Light;
        case 'Knight_Dark':
          return Knight_Dark;
        case 'Knight_Light':
          return Knight_Light;
        case 'Rook_Dark':
          return Rook_Dark;
        case 'Rook_Light':
          return Rook_Light;
        case 'Pawn_Dark':
          return Pawn_Dark;
        case 'Pawn_Light':
          return Pawn_Light;
        default:
            return Empty;
    }
}

export function releasePiece() {
    initialState.holdingPiece = ''
}

export function handleValidSquareMove(squareId) {
  movePieceToSquare(squareId)
  resetSquareSelected()
  closeMove()
  switchPlayerTurn()
}

function resetSquareSelected() {
    initialState.squareSelected = ''
}

function closeMove() {
    initialState.moveOpen = false
}

function switchPlayerTurn() {
    initialState.playerOneMove = !initialState.playerOneMove
}

export function passHoveringSquareInfo(squareInfo) {
  initialState.hoveringOverSquare = squareInfo
}

function movePieceToSquare(squareId) {
  boardValues[squareId] = passImage(initialState.holdingPiece)
  boardValues[`${squareId}SquareInfo`] = initialState.holdingPiece
}

export function addToClickHistory(squareId) {
    initialState.clickHistory.push(squareId)
}