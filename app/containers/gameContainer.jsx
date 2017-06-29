import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Layer, Rect, Stage, Group, Label, Text} from 'react-konva';
import {setExample} from '../actionCreators/example';
import {movePlayer, setPlayer} from '../actionCreators/player';
import {setOpponent,addOpponent} from '../actionCreators/opponents';
import GameScreen from '../components/gameScreen';

import io from 'socket.io-client';

let socket;

const mapStateToProps = (state) => ({
  x: state.player.x,
  y: state.player.y,
  turns: state.player.turns,
  enemys: state.opponents,
});

const mapDispatchToProps = (dispatch)=> ({
    setExample(text){
      dispatch(setExample(text));
    },
    move(direction,speed){
      dispatch(movePlayer(direction,speed));
    },
    setPlayer(x,y){
      dispatch(setPlayer(x,y))
    },
    setEnemy(id,pos){
      dispatch(setOpponent(id,pos))
    },
    addEnemy(id,pos){
      dispatch(addOpponent(id,pos))
    },
});

class GameContainer extends Component{
  constructor(){
    super()
    this.handleKey=this.handleKey.bind(this);
  }

 handleKey(e){
   const self = this;
   if(this.props.turns<1) return;
   e.preventDefault()
    const key = e.keyCode || e.which;
   const payload= { x: this.props.x,y:  this.props.y, turns: this.props.turns };
   socket.emit('player',{emitName: 'playerMove', payload: payload})
   //newplayer same deal eventually only emits to a group
   socket.on('playerMove', function (data) {
    console.log(`blahblah`,data)
    self.props.setEnemy(data.id,data.payload);
  });
    switch(key){
      case(87)://w
        this.props.move('up',50);
    
        return;
      case(83)://s
        this.props.move('down',50);
    
        return;
      case(65)://a
        this.props.move('left',50);
    
        return;
      case(68)://d
        this.props.move('right',50);
        
        return;
      default:
        return;
    }
    
  }

  componentWillMount(){
    socket = io()
    document.addEventListener("keydown", this.handleKey,false)
    socket.emit('load', {data: 'hi'})
  }
  render(){
    const self = this;
    socket.on('location', function(data){
     self.props.setPlayer(data.x,data.y)
   })
   socket.on('loaded', function(data){
     data.opponents.forEach(enemy=>{
       self.props.addEnemy(enemy.id);
     })
   })
   socket.on('new', function(data){
     self.props.addEnemy(data.id)
   })
    return(
      <Stage width={window.innerWidth-100} height={700} >
        <Layer > 
          {//title screen or gameScreen
          //title screen lets you pick a room
          }
          <GameScreen x={this.props.x} y={this.props.y} />   
        </Layer>
      </Stage>
    )
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(GameContainer)