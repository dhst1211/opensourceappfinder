import React, { Component } from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import CheckboxFilter from './CheckboxFilter'

export default class CheckboxFilters extends Component {
  render() {

    const { items, toggleFilter, filterType, displayName } = this.props;

    return (
      <div>
        <h3>{displayName}</h3>
        <FormGroup row>
          {items.map(item => (
              <CheckboxFilter key={item} item={item} toggleFilter={toggleFilter} filterType={filterType}/>
          ))}
        </FormGroup>
      </div>
    )
  }
}
