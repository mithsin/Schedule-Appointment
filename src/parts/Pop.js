import React, { Component } from 'react';

class Pop extends Component {


  render(){
    return(
      <div className="pop-container">
        <div className="pop_inner_container">
          <div onClick={this.props.submitPop} className="close-container">
          <p className="closeX">X</p>
          </div>
          <h2 className="errorMsg">{this.props.errorMessage}</h2>
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
            <button onClick={this.props.submitPop}>submit</button>
            <button onClick={this.props.clearPop}> clear</button>
          </div>

        </div>
      </div>
    )
  }
}

export default Pop;
