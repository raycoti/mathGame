import {MOVE_PLAYER_LEFT, MOVE_PLAYER_RIGHT, MOVE_PLAYER_UP, MOVE_PLAYER_DOWN, SET_PLAYER} from '../constants';

const initialState = {
  x: 0,
  y: 0,
  turns: 3,
}

export default function(state=initialState, action){
  const newState = Object.assign({}, state);
  
  switch(action.type){
    case MOVE_PLAYER_UP:
      newState.y = state.y - action.speed;
      newState.turns= newState.turns -1;
      break;
    case MOVE_PLAYER_DOWN:
      newState.y = state.y + action.speed;
      newState.turns= newState.turns -1;
      break;
    case MOVE_PLAYER_LEFT:
      newState.x = state.x - action.speed;
      newState.turns= newState.turns -1;
      break;
    case MOVE_PLAYER_RIGHT:
      newState.x = state.x + action.speed;
      newState.turns= newState.turns -1;
      break;
    default:
      return state;
  }
  return newState;
}