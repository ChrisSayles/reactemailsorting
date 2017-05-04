//imported components
import React, { Component } from 'react';
import {MenuItem} from 'react-bootstrap';




 class Dropdown extends Component {
   dropdownUpdate(){
     const output = this.myValue.value
     //update dropdownUpdate to the current dropdown item clicked
     this.props.dropdownUpdate(output)

   }
   render() {
     return(
      <div className='' >
       <div className="col-md-4">
{/* Dropdown box Syntax
on any change to the dropdown box dropdownUpdate will be updated to the chosen field value*/}
         <select title="Show All"

           className="dropdownSize"
           ref={ (value) => this.myValue = value}
           pullRight id="split-button-pull-right">
           onChange={this.dropdownUpdate.bind(this)}


            <option value="Business">Business</option>
            <option value="Home">Home</option>
            <option value="Finance">Finance</option>
            <option value="Education">Education</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Social Networking">Social Networking</option>
            <option value="News">News</option>
            <option value="Jobs">Jobs</option>
            <option value="Travel">Travel</option>
          </select>
       </div>
     </div>
   )
 }
 }
 export default Dropdown
