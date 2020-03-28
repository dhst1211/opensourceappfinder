import React, { Component } from 'react'
import Chip from '@material-ui/core/Chip';

import './ChipsFilter.scss';

export default class ChipsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { item, toggleFilter, filterType } = this.props;
    this.setState((prevState, props) => {
      return {checked: !prevState.checked};
    });
    toggleFilter({ item, filterType })
  }

  render() {
    const { item } = this.props;
    const { checked } = this.state;
    const chipColor = checked ? "primary" : "default"

    return (
      <Chip
        label={item}
        onClick={this.handleChange}
        color={chipColor}
        clickable
        className="chip"
      />
    )
  }
}