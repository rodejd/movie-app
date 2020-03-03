import React, {Component} from 'react';

class Bus extends Component{
    render() {
       return(
           <div>
               <p>props test</p>
               <h1><p>{this.props.love}</p></h1>
           </div>
       );
    }
}

export default Bus;