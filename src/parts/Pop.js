import React, { Component } from 'react';

class Pop extends Component {


  render(){
    return(
      <div className="pop-container">
        <div className="pop_inner_container">
          <div onClick={this.props.closePop} className="close-container">
          <p className="closeX">X</p>
          </div>

          <div className="input-container">
          <label>
            NAME:
          <input
            className="input-box"
            type="text"
            placeholder="Name"
            data-title = {this.props.title}
            data-name="name"
            value={this.props.name}
            onChange={this.props.onChange} />
          </label>
          </div>

          <div className="input-container">
          <label>
            PHONE NUMBER:
          <input
            className="input-box"
            type="text"
            placeholder="Phone Number"
            data-title = {this.props.title}
            data-name="phoneNumber"
            value={this.props.phoneNumber}
            onChange={this.props.onChange} />
          </label>
          </div>

          <div className="button-box">
            <button onClick={this.props.closePop}>submit</button>
          </div>

        </div>
      </div>
    )
  }
}

export default Pop;
