import {MOVE_PLAYER_LEFT, MOVE_PLAYER_RIGHT, MOVE_PLAYER_UP, MOVE_PLAYER_DOWN} from '../constants';

const moveUp = (speed) => ({
  type: MOVE_PLAYER_UP,
  speed
})


export const movePlayer= (direction, speed) => {
  return (dispatch) => {
    switch(direction){
      case 'up':
      
        break;
      case 'down':
        break;
      case 'left':
        break;
      case 'right':
        break;
      default:
        return;
    }
  }
}