// import {connect} from 'react-redux';
import React, {Component} from 'react';
import { Rect } from 'react-konva';

const GameScreen = ()=>{
  return (
    <Rect draggable = {true}
          x={10} y={20} width={50} height={50}
          fill={'blue'}
          shadowBlur={10}
           >
      
    </Rect>
  )
}

export default GameScreen;