import React , {Component} from 'react';
import './App.css';
import './Clock.css';
import './Clock_timer.css';

class Clock_timer extends React.Component {

constructor(props){
	super(props);
}

render(){

return(

<div className="clock_timer_section">

<div className = "mybtn">
         <button className = "btn">25</button>
         <button className = "btn">50</button>
         <button className = "btn">90</button>
	    </div>
		
		


<div>

<input type="text" name="task" placeholder="Task"/>
</div>

<div className="Time_div_margin">
<label  className="Time">00 : 00 : 00</label>
</div>

<div className="action_btns">
<button class="Play">Play</button>
</div>


</div>




);


}

}

export default Clock_timer;