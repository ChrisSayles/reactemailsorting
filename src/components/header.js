import React, { Component } from 'react';
//simple header which displays header text
 class Header extends Component {
   render() {
     return(
        <div >
       <div className="headerText col-md-12">Your Email organized</div>
       <div className="col-md-1"></div>
       <span className="headerSubfont headerSubfontBorder col-md-10">Sort your email with the input box</span>
       <div className="col-md-1"></div>
      </div>
        );
   }
};




export default Header;
