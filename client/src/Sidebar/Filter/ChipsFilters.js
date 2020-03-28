import React, { Component } from 'react'
import ChipsFilter from './ChipsFilter'
import './ChipsFilters.scss';

export default class ChipsFilters extends Component {
  render() {

    const { items, toggleFilter, filterType, displayName } = this.props;

    return (
      <div className="chipfilters-container">
        <h3>{displayName}</h3>
          {items.map(item => (
              <ChipsFilter key={item} item={item} toggleFilter={toggleFilter} filterType={filterType}/>
          ))}
      </div>
    )
  }
}