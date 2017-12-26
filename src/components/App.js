
import React,{ Component } from 'react';
import { MUSIC_LIST } from './musicList.js'

import '../assets/css/app.css'
import { Header } from './Header.js'

import Pubsub from 'pubsub-js'
class App extends Component{
	constructor(props){
		super(props);
		this.state={
		   musicList:MUSIC_LIST
		        
	    };
		
	}
	componendDidUnMount(){
		Pubsub.subscribe('DELETE_MUSIC',(msg,musicItem)=>{
				alert('LLA')
			this.setState({
				musicList:this.state.musicList.filter(item=>{
					return item!==musicItem
				})
			})
		})
		Pubsub.subscribe('PLAY_MUSIC',(msg,musicItem)=>{
			
		})
	}
	componendWillUnMount(){
		Pubsub.unsubscribe('DELETE_MUSIC')
		Pubsub.unsubscribe('PLAY_MUSIC')
	}
	render() {
	
	    return (
		    <div>
		    	<Header></Header>
		    	
		    		{React.cloneElement(this.props.children,this.state)}
		    </div>
	   	)
  	}
}

export { App };