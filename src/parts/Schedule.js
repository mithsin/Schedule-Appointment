import React, { Component } from 'react';
import Pop from './Pop';
import scheduleData from './scheduleData';

class Schedule extends Component {
  constructor(props){
    super(props);
    this.state = {
      schedule: scheduleData,
      timeArray: [9,10,11,12,1,2,3,4,5],
      popTrigger: false,
      errorMessage: "",
      currentSelect: 1
    }
  }

  onChange(e){
    const key = e.target.getAttribute('data-name'),
          value = e.target.value,
          title = this.state.currentSelect;

    this.setState(prevState => ({
      ...prevState,
      schedule : {
        ...prevState.schedule,
        [title] : {
          ...prevState.schedule[title],
          [key] : value
        }
      }
    }))
  }

  clearPop(e){
    e.preventDefault();
      const title = this.state.currentSelect;

      this.setState(prevState => ({
        ...prevState,
        schedule : {
          ...prevState.schedule,
          [title] : {
            ...prevState.schedule[title],
            name : "",
            phoneNumber: ""
          }
        },
        popTrigger: false
      }))
  }

  submitPop(e){
    e.preventDefault();
    const key = this.state.schedule[this.state.currentSelect].name,
          value = this.state.schedule[this.state.currentSelect].phoneNumber,
          // title = this.state.currentSelect,
          phoneNumberCheck = /^\(?\d{3}\)?-? *\d{3}-? *-?\d{4}$/,
          nameCheck = /^[a-z]{2,}$/;
      let checkAll = ((nameCheck.test(key) === true || key === "") &&  (phoneNumberCheck.test(value) === true || value === ""))


    if(checkAll){
      this.setState({
        popTrigger: false,
        errorMessage: ""
      })
    } else {
      this.setState({
        popTrigger: true,
        errorMessage: "please correct your name or phone number into currect format"
      })
    }

  }

  changeCurrent(title){
    this.setState({
      currentSelect: title,
      popTrigger: true
    })
  }

  ScheduleBox(){

    const { timeArray } = this.state;
    let coElement = timeArray.map(time => {
        return (
          <div
            key = {time}
            className={
              (this.state.popTrigger)? "hide":
                  (!this.state.schedule[time].name && !this.state.schedule[time].phoneNumber)?
                  "hour-div":
                  "color hour-div"
            }
            onClick={this.changeCurrent.bind(this, time)}>{time} {(time >=9)?"AM": "PM"}</div>
        )
      })
      return coElement;
    }


  render(){
    return(
      <div>
        <div className="scheducle_box">
        {this.ScheduleBox()}
        </div>
        <div className={(this.state.popTrigger)?"":"hide"}>
          <Pop
            {...this.state.schedule[this.state.currentSelect]}
            onChange = {this.onChange.bind(this)}
            submitPop = {this.submitPop.bind(this)}
            clearPop = {this.clearPop.bind(this)}
            errorMessage = {this.state.errorMessage}
          />
        </div>
      </div>
    )
  }
}

export default Schedule;
