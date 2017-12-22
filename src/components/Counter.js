
import React,{ Component } from 'react';
import {
    connect
} from 'react-redux';
class Counter extends Component {
	constructor(props){
		super(props);
		
	}
	
  render() {
  	console.log(this.props)
    const { value, onIncreaseClick,onReduceClick } = this.props
    return (
      <div>
      
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
       	<button onClick={onReduceClick}>Reduce</button>
      </div>
    )
  }
}
function mapStateToProps(state) {
	console.log(state);
  return {
    value: state.counter.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch({ type: 'increase' }),
    onReduceClick: () => dispatch({ type: 'reduce' })
  }
}
const increaseAction = { type: 'increase' }
const Commen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
export { Commen };