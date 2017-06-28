import { combineReducers } from 'redux';
import Example from './example';
import Player from './player';
import Opponents from './opponent';

export default combineReducers({
  example: Example,
  player: Player,
  opponents: Opponents
})
