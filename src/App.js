import React from 'react';
import logo from './logo.svg';
import hourglass from './hourglass.svg';
import './App.css';
import Navigation from './Navigation'
import Aim from './Aim'
import Clock from './Clock'
import { Helmet } from 'react-helmet';


class App extends React.Component {

constructor(){
		super();
        
    }

	render(){

	    
	
	return(

	<div id = "i">
	 <Helmet>
                <title>Productive Bird</title>
                <meta name="description" content="Todos on steroid!" />
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
           
		   </Helmet>
       


	<div id="i">
	<Navigation> </Navigation>
	<Clock></Clock>
	<Aim> </Aim>
	
     </div>   
	
	</div>

	);

	}
    

}

export default App;
