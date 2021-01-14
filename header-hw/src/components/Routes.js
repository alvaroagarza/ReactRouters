import React, {Component} from 'react';
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  // etc.
} from 'react-router-dom';
import Navbar from "./Navbar"
import Home from "./Home"
import Content from "./Content"
import About from "./About"
import './styles.css'

class Routes extends Component {
    render(){
      return(
        <Router>
          <div>
            <Navbar />
            {/* <hr /> */}
            <Route name="Home" path="/home" component={Home}/>
            <Route name="Content" path="/content" component={Content}/>
            <Route name="About" path="/about" component={About}/>
            
    

          </div>
        </Router>
      );
    }
  }

  export default Routes