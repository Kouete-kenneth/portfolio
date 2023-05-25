import React, { Component } from 'react'
import  "./click.css";
export class click extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    UpdateCounter = ()=>{
        this.setState({
            count:this.state.count+1
        });
    }
  render() {
    const {count}=this.state;

    return (
      <div> 
        <p>please click this button</p>
        <button onClick={this.UpdateCounter}>click {count} time</button>
      </div>
    );
  }
}

export default click