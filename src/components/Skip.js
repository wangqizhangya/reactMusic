
import React,{ Component } from 'react';
import { push } from 'react-router-redux';

import {
    connect
} from 'react-redux';
class Skip extends Component {
	constructor(props){
		super(props)
		
	}
  render() {
  	console.log(this.props)
    const { skip } = this.props
    return (
      <div>
       	<button onClick={skip}>skip</button>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    index: state.skipPage.cur
  }
}

function mapDispatchToProps(dispatch) {
  return {
  	
    skip: () => dispatch(push('/detail'))
    
  }
}
const Skipall = connect(
  mapStateToProps,
  mapDispatchToProps
)(Skip)
export { Skipall };