import initialState from '../centralState/gameState';
// ACTION CREATORS
export function switchPlayerMove() {
    initialState.playerOneMove = !initialState.playerOneMove;
    console.log(`It is player one's turn ${initialState.playerOneMove}`);
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