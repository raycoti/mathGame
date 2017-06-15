import {connect} from 'react-redux';
import React, {Component} from 'react';
import {setExample} from '../actionCreators/example';
import NavBar from '../components/navbar';

const mapStateToProps = (state) => {
  return {
    info: state.example.info
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setExample(text){
      dispatch(setExample(text));
    },
  }
}

class HomeContainer extends Component {
  constructor(){
    super()
  }
  componentWillMount(){
    this.props.setExample('dispatch happened!') //the only dispatch that should stay
  }
  render(){
    return (
      <div className="container-fluid" >
        <NavBar />
        <div className="col-md-12">
        <h1>{this.props.info}</h1>

        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
