import React, { Component } from 'react';
import './App.scss';
import Topbar from './Topbar/Topbar'
import Repos from './Repos/Repos';
import Sidebar from './Sidebar/Sidebar';
import Loader from './Util/Loader';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import amber from '@material-ui/core/colors/amber';
import Fab from '@material-ui/core/Fab';
import TuneIcon from '@material-ui/icons/Tune';
import DoneIcon from '@material-ui/icons/Done';

const REPOS_URL = "/api/projects";

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: amber,
    text: {
      primary: 'rgba(3, 26, 84, 0.87)',
      secondary: 'rgba(3, 26, 84, 0.65)',
    } 
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: null,
      showFilterOnMobile: false,
    };

    this.showFilter = this.showFilter.bind(this);
    this.hideFilter = this.hideFilter.bind(this);
  }

  componentDidMount() {
    fetch(REPOS_URL)
      .then(res => res.json())
      .then(repos => this.setState({ repos }));
  }

  showFilter(){
    this.setState({
      showFilterOnMobile: true,
    })
  }

  hideFilter(){
    window.scrollTo(0, 0);
    this.setState({
      showFilterOnMobile: false,
    })
  }

  renderFilterToggleButton(){
    const { showFilterOnMobile } = this.state;
    const filterApplyClass = showFilterOnMobile ? "filter-apply" : "filter-apply-invisible"
    return (
      <React.Fragment>
        <Fab variant="extended" color="secondary" aria-label="filter"
          onClick={this.showFilter} className="filter-button">
          <TuneIcon/>
          Filter
        </Fab>
        <Fab color="primary" aria-label="filter-apply" className={filterApplyClass}
          onClick={this.hideFilter}>
          <DoneIcon />
        </Fab>
      </React.Fragment>
    )
  }

  render() {
    const { repos } = this.state;

    if (!repos) {
      return <Loader/>;
    }

    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Topbar />
          {this.renderFilterToggleButton()}
          <main className="app-main">
            <Sidebar repos={repos} showFilterOnMobile={this.state.showFilterOnMobile}/>
            <Repos repos={repos}/>
          </main>
        </div>
      </ThemeProvider>
    );
  }
}
