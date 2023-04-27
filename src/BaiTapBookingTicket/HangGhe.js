import React, { Component } from 'react'

export default class HangGhe extends Component {
  render() {
    return (
        <div className="text-light mt-3" style={{ marginLeft: '2rem', fontSize:22 }}>
        {this.props.hangGhe.hang}
      </div>
    ) 
  }
}
