import React , {Component} from 'react';
import './App.css';
import './Clock.css';
import Clock_timer from './Clock_timer'


class Clock extends React.Component {

constructor(props){
	super(props);
}

render(){

return(
<div id="Clock" className = "Clock">

<Clock_timer> </Clock_timer>


</div>
);

}

}

export default Clock;