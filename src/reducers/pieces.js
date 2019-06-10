// INITIAL STATE
const initialState = {
    playerOneMove: true
}

// CONSTANTS THAT REPRESENT ACTIONS
const MOVE_SWITCH = 'MOVE_SWITCH';

// ACTION CREATORS
export function switchPlayerMove() {
    console.log(`It is player one turn, ${this.state.playerOneMove}`);
    return {
        type: MOVE_SWITCH,
        payload: !this.state.playerOneMove
    }
}

export function testFire() {
    console.log("testing");
}

// REDUCER FUNCTION
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case MOVE_SWITCH:
            return Object.assign({}, state, { playerOneMove: action.payload });
        default:
            return state;
    }
}