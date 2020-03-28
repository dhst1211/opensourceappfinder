import React, { Component } from 'react'
import { connect } from 'react-redux'

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';

import { sortRepos, SORT_BY_STAR, SORT_BY_PUSH_AT } from '../../Redux/actions'
import './Sort.scss'

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let sortBy = event.target.value
    this.setState({sortBy});
    this.props.sortRepos({sortBy})
  }

  render() {
    return (
      <Card className="sort-container">
        <FormControl className="sort-select">
          <InputLabel htmlFor="repo-sort">Sort</InputLabel>
          <Select
            native
            value={this.state.sortBy}
            onChange={this.handleChange}
            inputProps={{
              id: "repo-sort",
            }}
          >
            <option value="" />
            <option value={SORT_BY_STAR}>Star</option>
            {/* <option value={SORT_BY_PUSH_AT}>Push At</option> */}
          </Select>
        </FormControl>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = { sortRepos }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sort)
