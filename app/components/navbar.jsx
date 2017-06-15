import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
//<li className="theNav"><NavLink to="/about" activeClassName="active">About</NavLink></li>
const NavBar = function(){

 return(
    <nav className="navbar navbar-fixed-top navbar-toggleable-md navbar-light bg-faded"> 
          <div id="navigation" className="col-md-12 thenav">
            <ul>
              <li className="theNav"><NavLink exact to="/" activeClassName="active">HOME</NavLink></li>
            </ul>
          </div>
      </nav>
 )
}
export default NavBar;
