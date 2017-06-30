import {SET_OPPONENT, ADD_OPPONENT} from '../constants';

const initialState = {
  
}

export default function(state=initialState, action){
  const newState = Object.assign({},state);

  switch(action.type){
    case ADD_OPPONENT:
      newState[action.id]=action.enemy;
      break;
    case SET_OPPONENT:{
      newState[action.id]=Object.assign({},action.enemy);
      break;
    }
    default: 
      return state;
  }
  return newState;
}

