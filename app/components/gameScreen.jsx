// import {connect} from 'react-redux';
import React, {Component} from 'react';
import { Rect } from 'react-konva';

const GameScreen = ({x,y})=>{
  return (
    <Rect
          x={x} y={y} width={50} height={50}
          fill={'blue'}
          shadowBlur={10}
           >
      
    </Rect>
  )
}

export default GameScreen;