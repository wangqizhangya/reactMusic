
import React,{ Component } from 'react';
import { push } from 'react-router-redux'
import {
    connect
} from 'react-redux';
class Test extends Component {
	constructor(props){
		super(props)
		
	}
	
  render() {
  	console.log(this.props)
    const { index, test } = this.props
    return (
      <div>
        <span>{index}</span>
       	<button onClick={test}>test</button>
       	
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
  	
    test: () => dispatch({ type: 'add' })
    
  }
}
const Testall = connect(
  mapStateToProps,
  mapDispatchToProps
)(Test)
export { Testall };