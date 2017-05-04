import React, { Component } from 'react';
import Header from './components/header';
import Search from './components/search';
import NamesList from './components/NamesList';
import Dropdown from './components/dropdown.js'
import Categories from './components/Categories'





class App extends Component {
  constructor(props){
    super(props)
    this.state = {
  //set FilterText to a blank string
      filterText: "",
      filterDropdown:""
    }
  }
//When filterUpdate is called set the state equal to the value of the input
  filterUpdate(value) {
    this.setState({
      filterText: value,

    })
  };
//When dropdownUpdate is called set the state equal to the value of the input
  dropdownUpdate(value) {
    this.setState({
      filterDropdown: value,
    })
  };





  render() {


    return(
      <div className="bodybg">
          <div className='container'>
              <Header />
          </div>

          <div className="dropbg">

            {/* <Dropdown filterDropdown={this.state.filterDropdown}
             dropdownUpdate={this.dropdownUpdate.bind(this)} /> */}


              <Search filterText={this.state.filterText}
               filterUpdate={this.filterUpdate.bind(this)} />
          </div>

          <div>
{/*passing this.props.data to names list which will be used for filtering and rendering email info*/}
              <Categories />
              <NamesList data={this.props.data}
              filterText={this.state.filterText}
              filterDropdown={this.state.filterDropdown}/>
          </div>
    </div>
    )

  }
}

export default App;
