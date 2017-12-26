
import React,{ Component } from 'react';
import 'babel-polyfill';

import '../assets/css/app.css'
import { Player } from './page.js'
import { MUSIC_LIST } from './musicList.js'
import MusicList from './musiclist2.js'

class Home extends Component{
	constructor(props){
		super(props);
		this.state={
		   progress:'-',
		   currentMusicItem:MUSIC_LIST[0],
		   musicList:MUSIC_LIST
		        
	    };
	}
	
	
	render() {
	
    return (
    <div>
    	
    	<Player currentMusicItem={this.state.currentMusicItem}></Player>
     	<MusicList currentMusicItem={this.state.currentMusicItem} musicList={this.state.musicList}></MusicList>
    </div>
   )
  }
}
export { Home };