import {MOVE_PLAYER_LEFT, MOVE_PLAYER_RIGHT, MOVE_PLAYER_UP, MOVE_PLAYER_DOWN} from '../constants';

const moveUp = (speed) => ({
  type: MOVE_PLAYER_UP,
  speed
})

const moveDown = (speed) => ({
  type: MOVE_PLAYER_DOWN,
  speed
})
const moveLeft= (speed) => ({
  type: MOVE_PLAYER_LEFT,
  speed
})
const moveRight = (speed) => ({
  type: MOVE_PLAYER_RIGHT,
  speed
})


export const movePlayer= (direction, speed) => {
  return (dispatch) => {
    
    switch(direction){
      case 'up':
        dispatch(moveUp(speed));
        break;
      case 'down':
        dispatch(moveDown(speed));
        break;
      case 'left':
        dispatch(moveLeft(speed));
        break;
      case 'right':
        dispatch(moveRight(speed));
        break;
      default:
        return;
    }
  }
}