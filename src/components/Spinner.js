import React, { Component } from 'react'
import loading from './Loading.gif';
export class spinner extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt="Loading" style={{width: "30px", height: "30px", display: "block", margin: "auto"}}/>
      </div>
    )
  }
}

export default spinner