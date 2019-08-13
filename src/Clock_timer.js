import React , {Component} from 'react';
import './App.css';
import './Clock.css';
import './Clock_timer.css';

class Clock_timer extends React.Component {

constructor(props){
	super(props);

	this.state =  {
	
	timer: 50,
	timerHour : 0,
	timerMinute : 50,
	timerSec : 0,
	task:""	


	
	};

}


 setTimer = (event) => {
	
	if (event.target.getAttribute('data-min') == 25) {
		
			this.setState({timerMinute:25,timerHour:0,timerSec : 0 ,timer:25});
			event.target.className ='btn_selected';
			document.getElementById('time50').className='btn';
			document.getElementById('time90').className='btn';
	}

	if(event.target.getAttribute('data-min') == 50){
			this.setState({timerMinute:50, timerHour:0, timerSec : 0 ,timer:50});
			event.target.className ='btn_selected';
			document.getElementById('time25').className='btn';
			document.getElementById('time90').className='btn';
	}

	if(event.target.getAttribute('data-min') == 90){
			this.setState({timerMinute:2,  timerHour:1,timerSec : 0  ,timer:90});
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

<input type="text" name="task" placeholder="Task" value = {this.state.task} onChange = {this.updateTask}/>
</div>

<div className="Time_div_margin">

<label  className="Time">{ this.state.timerHour == 0 ? '': this.state.timerHour + ' : ' }{this.state.timerMinute} : {this.state.timerSec<10 ?'0'+this.state.timerSec:this.state.timerSec }</label>
</div>


<div className="action_btns">

<button className="Play" onClick = {this.Start}>Start</button>
<button className="Stop" onClick = {this.Stop}>Stop</button>
<button className="Reset" disabled = {true} onClick = {this.Reset}>Reset</button>

</div>
</div>

);

}

updateTask = (event) => {

this.setState({task:event.target.value});

}


Start = (event) => {


/*	Replace start with stop 
	Show reset button
	



*/

event.target.disabled = true;
document.querySelector(".Reset").disabled=false;
event.target.style.display = 'none';
document.querySelector(".Stop").style.display = 'inline-block';

var self = this;
var start = event;
var refreshId =  setInterval(function(){
  

	if(self.state.timerHour == 0 && self.state.timerMinute  == 0 && self.state.timerSec == 0){
		
		/*	save data locally 
			save graph data points 
			enable start 
			disable stop 
	*/
		clearInterval(refreshId);
		 // saveTask();



	}

	if(self.state.timerMinute>0 && self.state.timerSec==0){
		let  new_timerMinute =  self.state.timerMinute - 1 
		self.setState({timerMinute:new_timerMinute});
	}
	
	if(self.state.timerHour>0 && self.state.timerMinute==0){
		let  new_timerHour =  self.state.timerHour - 1
		let new_minute = 60;
		self.setState({timerHour:new_timerHour,timerMinute:new_minute});
	}
	
	if (self.state.timerSec==0)
			self.setState({timerSec:60});

	let  new_timerSec =  self.state.timerSec - 1 ; 
	self.setState({timerSec:new_timerSec});

}, 1000);

}



saveTask = () => {

var value = ["25","50","90"]
localStorage.setItem(this.state.task, JSON.stringify(value));
var test = JSON.parse(localStorage.getItem("tast"));
alert(test);

}



}
export default Clock_timer;