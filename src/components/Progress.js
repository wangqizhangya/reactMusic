
import React,{ Component } from 'react';

import $ from 'jquery';
import '../assets/bootstrap/css/progress.css'
//`${}`
//例如： var a = 1; console.log('一共有'+a+'个鸡蛋！')
//
//那么现在你只要console.log(`一共有${a}个鸡蛋！`)
class Progress extends Component{
	constructor(props){
		super(props);
		
	}
	getDefaultProps(){
		return {
			barColor:'#2f9842'
		}
	}
	changeProgress(e){
		let progressBar=this.refs.progressBar;
		
		let progress=(e.clientX-progressBar.getBoundingClientRect().left)/progressBar.clientWidth;
		this.props.onprogressChangge&&this.props.onprogressChangge(progress)
		
	}
	render() {
    return (<div className="components-progress" onClick={this.changeProgress.bind(this)} ref="progressBar">
    <div className="progress" style={{width:`${this.props.progress}%`,background:this.props.barColor}}></div>
    {this.props.progress}s</div>)
  }
}
export { Progress };