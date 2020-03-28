import React, { Component } from 'react'

import Card from '@material-ui/core/Card';

import './Sidebar.scss';
import CheckboxFiltersContainer from './Filter/CheckboxFiltersContainer'
import RangeFilterContainer from './Filter/RangeFilterContainer';
import ChipsFilterContainer from './Filter/ChipsFilterContainer';

export default class Sidebar extends Component {
  render() {
    const { repos, showFilterOnMobile } = this.props;
    // slow
    const categories = [...new Set(repos.map(repo => repo.category))]
    const languages = [...new Set(repos.map(repo => repo.language))]

    const sidebarClassName = showFilterOnMobile ? "sidebar sidebar-show" : "sidebar";

    return (
      <Card className={sidebarClassName}>
        <ChipsFilterContainer items={languages} filterType="language" displayName="LANGUAGE" />
        <ChipsFilterContainer items={categories} filterType="category" displayName="CATEGORY" />
        <RangeFilterContainer filterType="star" displayName="STAR" />
        <RangeFilterContainer filterType="fork" displayName="FORK" />
        <RangeFilterContainer filterType="issue" displayName="ISSUE"/>
        <div className="sibebar-bottom" style={{ height: "150px" }}/>
      </Card>
    )
  }
}
