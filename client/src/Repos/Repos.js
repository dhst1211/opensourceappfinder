import React, { Component, PureComponent } from "react";
import { connect } from 'react-redux'
import { FixedSizeList } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import './Repos.scss';
import Repo from "./Repo";
import Sort from "./Header/Sort";
import { SORT_BY_STAR, SORT_BY_PUSH_AT } from '../Redux/actions'

class ItemRenderer extends PureComponent {
  render() {
    const repo = this.props.data[this.props.index];

    return (
      <Repo
        style={this.props.style}
        repo={repo}
      />
    );
  }
}
class Repos extends Component {

  render() {
    const { repos } = this.props;

    return (
      <div className="repos">
        <Sort />
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              itemData={repos}
              height={1500}
              itemCount={repos.length}
              itemSize={255}
              width={width}
            >
              {ItemRenderer}
            </FixedSizeList>
          )}
        </AutoSizer>
      </div>
    );
  }
}

const filterRepos = (state, repos) => {
  const { categories, languages } = state;
  const { lowerLimit: starLowerLimit, upperLimit: starUpperLimit } = state.star;
  const { lowerLimit: forkLowerLimit, upperLimit: forkUpperLimit } = state.fork;
  const { lowerLimit: issueLowerLimit, upperLimit: issueUpperLimit } = state.issue;

  let filteredRepos = categories.length === 0 ? repos : repos.filter(repo => categories.includes(repo.category))
  filteredRepos = languages.length === 0 ? filteredRepos : filteredRepos.filter(repo => languages.includes(repo.language))
  filteredRepos = !starLowerLimit ? filteredRepos : filteredRepos.filter(repo => repo.star > starLowerLimit)
  filteredRepos = !starUpperLimit ? filteredRepos : filteredRepos.filter(repo => repo.star < starUpperLimit)
  filteredRepos = !forkLowerLimit ? filteredRepos : filteredRepos.filter(repo => repo.forks_count > forkLowerLimit)
  filteredRepos = !forkUpperLimit ? filteredRepos : filteredRepos.filter(repo => repo.forks_count < forkUpperLimit)
  filteredRepos = !issueLowerLimit ? filteredRepos : filteredRepos.filter(repo => repo.open_issues_count > issueLowerLimit)
  filteredRepos = !issueUpperLimit ? filteredRepos : filteredRepos.filter(repo => repo.open_issues_count < issueUpperLimit)
  return filteredRepos;
}

const sortRepos = (state, repos) => {
  const { sortBy } = state.sortRepos
  switch(sortBy) {
    case SORT_BY_STAR:
      return repos.sort((a, b) => b.star - a.star)
    //case SORT_BY_PUSH_AT:
      // return repos.map(r => moment().format(r.pushed_at))
      //      .sort((a, b) => a.pushed_at - b.pushed_at)
      //return repos.sort((a, b) => a.pushed_at - b.pushed_at);
      //return repos.sort(sortDate)
    default:
      return repos;
  }
}

const selectRepos = (state, repos) => {
  let filteredRepos = filterRepos(state, repos)
  filteredRepos = sortRepos(state, filteredRepos)
  return filteredRepos
}

const mapStateToProps = (state, ownProps) => {
  return {
    repos: selectRepos(state, ownProps.repos)
  }
}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos)