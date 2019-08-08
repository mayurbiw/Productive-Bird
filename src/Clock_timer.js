import React , {Component} from 'react';
import './App.css';
import './Clock.css';
import './Clock_timer.css';

class Clock_timer extends React.Component {



constructor(props){
	super(props);

	this.state =  {
	
	timerHour : 0,
	timerMinute : 50,
	timerSec : 0,
	label : '50'

	
	};

}


 setTimer = (event) => {
	
	if (event.target.getAttribute('data-min') == 25) {
		
			this.setState({timerMinute:25,timerHour:0,timerSec : 0 ,label:'25'});
			event.target.className ='btn_selected';
			document.getElementById('time50').className='btn';
			document.getElementById('time90').className='btn';
	}

	if(event.target.getAttribute('data-min') == 50){
			this.setState({timerMinute:50, timerHour:0, timerSec : 0 ,  label:'50'});
			event.target.className ='btn_selected';
			document.getElementById('time25').className='btn';
			document.getElementById('time90').className='btn';
	}

	if(event.target.getAttribute('data-min') == 90){
			this.setState({timerMinute:30,  timerHour:1,timerSec : 0  ,label:'1 : 30'});
			event.target.className ='btn_selected';
			document.getElementById('time25').className='btn';
			document.getElementById('time50').className='btn';
	}


}

render(){

return(

<div className="clock_timer_section">

<div className = "mybtn">
         <button data-min="25" className = "btn" onClick = {this.setTimer} id = "time25" >25</button>
         <button data-min="50" className = "btn_selected" onClick = {this.setTimer} id = "time50">50</button>
         <button data-min="90" className = "btn" onClick = {this.setTimer} id = "time90">90</button>
	    </div>
		
		


<div>

<input type="text" name="task" placeholder="Task"/>
</div>

<div className="Time_div_margin">

<label  className="Time">{ this.state.timerHour == 0 ? '': this.state.timerHour + ' : ' }{this.state.timerMinute} : {this.state.timerSec<10 ?'0'+this.state.timerSec:this.state.timerSec }</label>
</div>


<div className="action_btns">
<button class="Play" onClick = {this.Start}>Start</button>
</div>
</div>

);

}


Start = () => {

var self = this;

setInterval(function(){
  
	if (self.state.timerSec==0)
			self.setState({timerSec:60});

	let  new_timerSec =  self.state.timerSec - 1 ; 
	self.setState({timerSec:new_timerSec});

}, 1000);

}



}

export default Clock_timer;