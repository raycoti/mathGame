import {SET_EXAMPLE} from '../constants';

const initialState = {
  info: '',
}

export default function(state=initialState, action){
  const newState = Object.assign({}, state);
  switch(action.type) {
    case SET_EXAMPLE:
      newState.info = action.info;
      break;
    default:
      return state;
  }
  return newState;
}
