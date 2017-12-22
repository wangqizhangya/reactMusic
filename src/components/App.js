
import React,{ Component } from 'react';
import 'babel-polyfill';
import { Commen } from './Counter.js'
import { Testall } from './Test.js'
import { Skipall } from './Skip.js'
import { TemperatureContainer } from'./ParentAndChild'
import { Progress } from './Progress.js'
import '../assets/css/app.css'
class App extends Component{
	constructor(props){
		super(props);
		this.state={
		   progress:'-'
		        
	    };
	}
	componentDidMount(){
		$("#player").jPlayer({
			ready:function(){
				$(this).jPlayer('setMedia',{
					mp3:'../assets/bootstrap/js/陈小春-独家记忆.mp3'
				}).jPlayer('play');
			},
			supplied:'mp3',
			vmode:window
		})
		$("#player").bind($.jPlayer.event.timeupdate,(e)=>{
			this.setState({
				progress:Math.round(e.jPlayer.status.currentTime)
			})
		})
	}
	componendWillUnMount(){
		$("#player").unbind($.jPlayer.event.timeupdate);
	}
	render() {
	
    return (
    <div>
    	<img className="musicIcon" src={require("../images/music.jpg")} />
    	<span className="text">送给我爱的王齐</span>
    	<div id="player"></div>
    	<Progress progress={this.state.progress}></Progress>
     	{this.props.children}
    </div>
   )
  }
}
export { App };