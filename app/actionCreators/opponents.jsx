import {ADD_OPPONENT, SET_OPPONENT} from '../constants';

export const setOpponent = (id,position) => ({
  type: SET_OPPONENT,
  id,
  enemy: position,
})

export const addOpponent = (id,position) => ({
  type: ADD_OPPONENT,
  id,
  enemy: position,
})


