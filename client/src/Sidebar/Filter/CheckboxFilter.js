import React, { Component } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class CheckboxFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { item, toggleFilter, filterType } = this.props;
    this.setState({ checked: event.target.checked });
    toggleFilter({ item, filterType })
  }

  render() {

    const { item } = this.props;

    return (
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleChange}
              color="primary"
            />
          }
          label={item}
        />
      </div>
    )
  }
}
