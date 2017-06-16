import {MOVE_PLAYER_LEFT, MOVE_PLAYER_RIGHT, MOVE_PLAYER_UP, MOVE_PLAYER_DOWN} from '../constants';

const initialState = {
  x: 0,
  y: 0,
}

export default function(state=initialState, action){
  const newState = Object.assign({}, state);
  switch(action.type){
    case MOVE_PLAYER_UP:
      newState.y = state.y - action.speed;
      //action.move will be action multiplier based on things like movement speed etc,
      break;
    case MOVE_PLAYER_DOWN:
      newState.y = state.y + action.speed;
      break;
    case MOVE_PLAYER_LEFT:
      newState.x = state.x - action.speed;
      break;
    case MOVE_PLAYER_RIGHT:
      newState.x = state.x + action.speed;
      break;
    default:
      return state;
  }
  return newState;
}