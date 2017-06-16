import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Layer, Rect, Stage, Group, Label, Text} from 'react-konva';
import {setExample} from '../actionCreators/example';
import GameScreen from '../components/gameScreen'
const mapStateToProps = (state) => ({
  example: state.example.info
});

const mapDispatchToProps = (dispatch)=> ({
    setExample(text){
      dispatch(setExample(text));
    },
});

class GameContainer extends Component{
  constructor(){
    super()
    this.handleKey=this.handleKey.bind(this);
  }

 handleKey(e){
    const key = e.keyCode;
    if(key>=37 && key<=40 ){
      console.log(e.keyCode)
    }
  }

  componentWillMount(){
    this.props.setExample('Canvas eventually')
    document.addEventListener('keypress',this.handleKey ,false)

  }

  render(){
    return(
      <Stage width={window.innerWidth-100} height={700} >
        <Layer > 
          <GameScreen />   
        </Layer>
      </Stage>
    )
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(GameContainer)