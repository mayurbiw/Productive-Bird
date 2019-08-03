import React , {Component} from 'react';
import './App.css';
import './navigation.css'

class Navigation extends React.Component {
    
    
    constructor(props){
        super(props);
        
    }
    
    render(){
        
        return(
        
        
            <div className="nav">

			<h3>ProductiveBird</h3>
            
			<label htmlFor = "toggle" className="Toggle">&#9776;</label>
			<input type ="checkbox" id = "toggle"  className="checkbox_toggle" />
            
			<div className="menu">
			
			<a href = '#' > <span> Login  </span></a>
			<a  className="aim" href = '#'> <span > Aims  </span></a>

			</div>
                
            
            </div>
        
        );
        
    }
    
}


export default Navigation;