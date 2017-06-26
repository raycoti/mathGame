import { combineReducers } from 'redux';
import Example from './example';
import Player from './player';

export default combineReducers({
  example: Example,
  player: Player,
})
