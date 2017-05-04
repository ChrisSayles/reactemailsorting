import React, { Component } from 'react';
//simple header which displays header text
 class Categories extends Component {
   render() {
     return(
       <div className="row ">
                     <div className="col-sm-1 indentSpace categoryIndent">Organize</div>
                     <div className="col-sm-3">Sender</div>
                     <div className="col-sm-3">Domain</div>
                     <div className="col-sm-3 emailMargin">Email</div>
                     <div className="col-sm-2">Folder</div>
                 </div>

        );
   }
};




export default Categories;
