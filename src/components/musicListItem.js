import React,{ Component } from 'react';
import '../assets/css/player.css'
import Pubsub from 'pubsub-js'
class MusicListItem extends Component{
	
	componendDidUnMount(){
		
	}
	playMusic(musicItem){
		
		Pubsub.publish('PLAY_MUSIC',musicItem);
		console.log(Pubsub.publish)
	}
	deleteMusic(musicItem,e){
		//防止事件冒泡到li上
//		e.stopPropagation();
		e.stopPropagation();
		e.nativeEvent.stopImmediatePropagation();
		Pubsub.publish('DELETE_MUSIC',musicItem);
		console.log(Pubsub)
		
	}
	render(){
		let musicItem=this.props.musicItem
		return (
			<li className={`components-musiclistitem row ${this.props.focus?'focus':''}`} onClick={this.playMusic.bind(this,musicItem)} >
				<p><strong>{musicItem.title}</strong>-{musicItem.artist}</p>
				<p className="-col-auto delete"></p>
				<span className="delete" onClick={this.deleteMusic.bind(this,musicItem)}></span>
			</li>
		)
	}
}

export default MusicListItem;