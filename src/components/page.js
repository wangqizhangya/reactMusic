import React,{ Component } from 'react';
import { Progress } from './Progress.js'
import { Link }  from 'react-router'
let duration=null;
import '../assets/css/player.css'

class Player extends Component{
	
	constructor(props){
		super(props);
		this.state={
		   progress:0,
		   volume:0,
		   isPlay:true
		
		        
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
			duration=e.jPlayer.status.duration;
			this.setState({
				volume:e.jPlayer.options.volume*100,
				progress:e.jPlayer.status.currentPercentAbsolute
			})
		})
		
	}
	componendWillUnMount(){
		$("#player").unbind($.jPlayer.event.timeupdate);
	}
	progressHander(progress){
		alert(progress)
		$("#player").jPlayer('play',duration*progress)
	}
	changevolumeHandler(progress){
		$("#player").jPlayer('volume',progress)
	}
	play(){
		if(this.state.isPlay){
			$("#player").jPlayer('pause')
		}else{
			$("#player").jPlayer('play')
		}
		this.setState({
			isPlay:!this.state.isPlay
		})
	}
	render() {
	
    return (
    <div className="player-page">
    	<h1 className="caption">给我一首歌的时间&gt;</h1>
    	<div className="mt20 row">
    		<div className="controll-wrapper">
    			<h2 className="music-title">{this.props.currentMusicItem.title}</h2>
    			<h3 className="music-artist mt10">{this.props.currentMusicItem.artist}</h3>
    			<div className="row mt20">
    				
    				<div className="left-time -col-auto">-2:00</div>
    				<div className="volume-container">
    					<i className="icon-volume rt" style={{top:5}}></i>
    					<div className="volume-wrapper">
    						<Progress progress={this.state.volume} onprogressChangge={this.changevolumeHandler.bind(this)} barColor="#aaa"></Progress>
    					</div>
    				</div>
    			</div>
    			<div style={{height:10,lineHeight:'10px'}}>
    				<Progress progress={this.state.progress} onprogressChangge={this.progressHander.bind(this)} barColor="red"></Progress>
    			</div>
    			<div className="mt35 row">
    				<div>
    					<span className="icon prev"></span>
    					<span className={`icon m120 ${this.state.isPlay?'pause':'play'}`} onClick={this.play.bind(this)}></span>
    					<span className="icon m120 next"></span>
    				</div>
    				<div className="-col-auto">
    					<i className="icon repeat-cycle"></i>
    				</div>
    			</div>
    			
    		</div>
    		<div className="-col-auto cover">
    			<img alt="歌曲名称" src="" />
    		</div>
    		
    	</div>
    	
     	
    </div>
   )
  }

}
export { Player }
