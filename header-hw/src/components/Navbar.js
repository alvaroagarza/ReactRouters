import React, {Component} from 'react';
import {
    BrowserRouter as Router, // we are aliasing this module for a cleaner call
    Route,
    Link
    // etc.
  } from 'react-router-dom';

class Navbar extends Component {
    render(){
      return(
      <div className="navbar navbar-expand-lg navbar-light" Style="background-color: #e3f2fd">
        <Link className="nav-link" to="Home">Home</Link> 
        <Link className="nav-link" to="content">Content</Link> 
        <Link className="nav-link" to="about">About</Link> 

 
  
  </div>
        
      );
    }
  }
  


  
  export default Navbar