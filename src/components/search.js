import React, { Component } from 'react';


class Search extends Component {
//function that will update the value of filterupdate to the typed value
  filterUpdate(){
    const val = this.myValue.value
    //update filterUpdate to the current Value
    this.props.filterUpdate(val)

  }
  render() {

    return (



      <div className="col-md-12">
        <input type="text"
          className="searchBarLength"
  //set this.myValue to value
          ref={ (value) => this.myValue = value}
          placeholder="Search for a sender..."
          //when a change occurs bind filterUpdate to this
          onChange={this.filterUpdate.bind(this)}

        />
      </div>
    )
  }
}

export default Search;
