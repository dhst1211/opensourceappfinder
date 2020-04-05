import React, { Component } from 'react'
import './Repo.scss';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';

import Icon from '@mdi/react'
import { mdiStar } from '@mdi/js';
import { mdiSourceFork } from '@mdi/js';
import { mdiAlertCircleOutline } from '@mdi/js';
export default class Repo extends Component {

  constructor(props) {
    super(props);

    this.toRepoLink = this.toRepoLink.bind(this);
  }

  toRepoLink(){
    const { repo } = this.props;
    window.open(repo.url)
  }

  renderFooter(repo) {
    return (
      <div className="repo-footer">
      {repo.homepage && 
        <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
          <HomeIcon/>
        </a>
      }
      </div>
    )
  }

  render() {
    const { repo, style } = this.props

    return (
      <Card className="repo" style={style}>
        <CardActionArea onClick={this.toRepoLink}>
          <CardContent className="repo-content">
            <div className="left-area">
              <Typography variant="overline" color="textSecondary" component="p" className="repo-author">
                {repo.author} /
              </Typography>
              <Typography variant="h5" component="h2" className="repo-name" color="primary" gutterBottom>
                {repo.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className="repo-description">
                {repo.description}
              </Typography>
              <div className="repo-stats-area">
                <div className="repo-stats-item">
                  <Typography variant="body2" color="textSecondary" component="p" className="repo-stats-item-key">
                    <Icon path={mdiStar}
                      size={"1em"}
                    />
                    star
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p" className="repo-stats-item-value">
                    {repo.star}
                  </Typography>
                </div>
                <div className="repo-stats-item">
                  <Typography variant="body2" color="textSecondary" component="p" className="repo-stats-item-key">
                    <Icon path={mdiSourceFork}
                      size={"1em"}
                    />
                    fork
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p" className="repo-stats-item-value">
                    {repo.forks_count}
                  </Typography>
                </div>
                <div className="repo-stats-item">
                  <Typography variant="body2" color="textSecondary" component="p" className="repo-stats-item-key">
                    <Icon path={mdiAlertCircleOutline}
                      size={"1em"}
                    />
                    issue
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p" className="repo-stats-item-value">
                    {repo.open_issues_count}
                  </Typography>
                </div>
              </div>
            </div>
            <div className="right-area">
              <List className="repo-attribute-list">
                <ListItem divider className="repo-attribute">
                  <ListItemText secondary="Language" className="repo-attribute-title" />
                  <ListItemText primary={repo.language} />
                </ListItem>
                <ListItem divider className="repo-attribute">
                  <ListItemText secondary="Category" className="repo-attribute-title" />
                  <ListItemText primary={repo.category} />
                </ListItem>
                <ListItem divider className="repo-attribute">
                  <ListItemText secondary="Last push" className="repo-attribute-title" />
                  <ListItemText primary={repo.pushed_at} />
                </ListItem>
              </List>
              {this.renderFooter(repo)}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

