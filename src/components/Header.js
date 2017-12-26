
import React,{ Component } from 'react';
import $ from 'jquery';

class Header extends Component{
	
	render() {
    return <div>
   
      <img className="musicIcon" src={require("../images/music.jpg")} />
    	<span className="text">送给我爱的王齐</span>
    	<div id="player"></div>
    </div>
  }
}
export { Header };