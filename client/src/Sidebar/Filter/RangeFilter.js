import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import './RangeFilter.scss';
export default class RangeFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lowerLimit: "",
      upperLimit: ""
    };

    this.handleLowerLimitChange = this.handleLowerLimitChange.bind(this);
    this.handleUpperLimitChange = this.handleUpperLimitChange.bind(this);
    this.handleLowerLimitEnterKey = this.handleLowerLimitEnterKey.bind(this);
    this.handleUpperLimitEnterKey = this.handleUpperLimitEnterKey.bind(this);
    this.handleLowerLimitSubmit = this.handleLowerLimitSubmit.bind(this);
    this.handleUpperLimitSubmit = this.handleUpperLimitSubmit.bind(this);
  }

  handleLowerLimitChange(event) {
    this.setState({ [event.target.name]: event.target.value});
    if(event.which === 13 || event.keyCode === 13){
      this.handleLowerLimitSubmit(event)
    }
  }

  handleUpperLimitChange(event) {
    this.setState({ [event.target.name]: event.target.value});
    if(event.which === 13 || event.keyCode === 13){
      this.handleUpperLimitSubmit(event)
    }
  }

  handleLowerLimitEnterKey(event) {
    if(event.which === 13 || event.keyCode === 13){
      this.handleLowerLimitSubmit(event)
    }
  }

  handleUpperLimitEnterKey(event) {
    if(event.which === 13 || event.keyCode === 13){
      this.handleUpperLimitSubmit(event)
    }
  }

  handleLowerLimitSubmit(event) {
    const { changeLowerRange, filterType } = this.props;
    const { lowerLimit } = this.state;
    changeLowerRange({ lowerLimit, filterType })
  }

  handleUpperLimitSubmit(event) {
    const { changeUpperRange, filterType } = this.props;
    const { upperLimit } = this.state;
    changeUpperRange({ upperLimit, filterType })
  }



  render() {
    const { filterType, displayName } = this.props

    return (
      <div>
        <h3>{displayName}</h3>
        <div className="range-input-area">
          <TextField
            type="number"
            name="lowerLimit"
            placeholder="Min"
            value={this.state.lowerLimit}
            onChange={this.handleLowerLimitChange}
            onKeyPress={this.handleLowerLimitEnterKey}
            onBlur={this.handleLowerLimitSubmit}
          />
          <span>-</span>
          <TextField
            type="number"
            name="upperLimit"
            placeholder="Max"
            value={this.state.upperLimit}
            onChange={this.handleUpperLimitChange}
            onKeyPress={this.handleUpperLimitEnterKey}
            onBlur={this.handleUpperLimitSubmit}
          />
        </div>
      </div>
    )
  }
}
