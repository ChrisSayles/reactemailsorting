import React, { Component } from 'react';
import {Checkbox} from 'react-bootstrap';
import {SplitButton} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';

class NamesList extends Component {

  render() {

//Define our constants and set them equal to this.props
    const { data, filterText, filterDropdown } = this.props;


//NAME LIST HOLDS ALL EMAIL RECIPIENTS PULLED FROM THE DATA.JS AND BREAKS IT INTO CATEGORIES (SENDER,EMAIL,FOLDER,DOMAIN,ORGANIZE)
    const NamesList = data
//filtering based on the name of the sender and setting text to lowercase

    .filter(name => {
      return name.sender.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
    })

//mapping through our array of data
    .map(name => {
      return(
      <div className={name.cssClassName}>

              <div className="row bodyRowHeight contentBackground emailPosition">
                <div className="col-sm-1 indentSpace verticalAlign contentBackground">

{/*setting up our checkbox.  defaultChecked sets users with organize: true to checked*/}
                  <Checkbox className="col-sm-1 checkbox-inline"
                    key={name.organize}
                    defaultChecked={name.organize}
                    >
                    {name.organize}
                  </Checkbox>
                </div>

                <img src="style/nophoto.jpg"  align="left" className="col-sm-1 verticalAlign contentBackgroundWhite logoImage"/>
{/*the name of the sender will be displayed in this div*/}
                <h5 className="whiteBG col-sm-2" key={name.sender}>{name.sender}</h5>
{/*the name of the domain will be displayed in this div*/}
                  <div className="col-sm-2 verticalAlign contentBackgroundWhite MarginLeft" key={name.domain}>{name.domain}</div>
{/*the email of the sender will be displayed in this div*/}
                  <div className="col-sm-3 verticalAlign contentBackgroundWhite"key={name.email}>{name.email}</div>
{/*setting the values of the checkbox dropdown*/}
                  <div className='btnDivHeight col-sm-3 contentBackgroundWhite'>
                  <SplitButton title={name.folder} pullRight id="split-button-pull-right" className="" key={name.folder}>
                     <MenuItem eventKey="1" key={name.folder}>{name.folder}</MenuItem>
                     <MenuItem eventKey="2">Another action</MenuItem>
                     <MenuItem eventKey="3">Something else here</MenuItem>
                     <MenuItem divider />
                     <MenuItem eventKey="4">Separated link</MenuItem>
                   </SplitButton>
                 </div>
              </div>
            </div>
          )
        });



//NamesList which holds all the content above can be returned simply by using {NamesList}
    return(
    <div>
      <ul>
        {NamesList}
      </ul>
    </div>
    );


  }
}

export default NamesList;
