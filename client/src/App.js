import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import './App.css';
import UserProfile from './modules/UserProfile';
import RecentGames from './modules/RecentGames';

const useStyles = theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      userdata: null,
      recentGames: false,
    };

    this.execute = this.execute.bind(this);
  }

  async execute() {
    const userdata = await axios.get(`/steam/user-all/${this.state.input}`);
    this.setState({ userdata: userdata });

    if (this.state.userdata.data.recentGames.length > 0) {
      this.setState({ recentGames: true });
    } else {
      this.setState({ recentGames: false });
    }
    console.log(userdata);

  }

  renderRecentGames() {
    if (this.state.recentGames) {
      let recentGames = this.state.userdata.data.recentGames;
      
      return (
        <div className="App-components">
          {recentGames.map((item, key) => (
            <React.Fragment key={key}>
              <RecentGames data={item} />
            </React.Fragment>
          ))}
        </div>
      );
    }
  }
  
  renderUserInfo() {
    if (this.state.userdata) {
      return (
        <div className="App-components">
          {<UserProfile user={this.state.input} data={this.state.userdata.data.summary}/>}
        </div>
      );
    }
  }

  enterPressed(event) {
    let code = event.keyCode || event.which;

    if (code === 13) {
      this.execute();
    }
  }
 
  render() {
    const { classes } = this.props;

    return (
      <div className="App">

        <div className="search-bar">
          <Paper className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Enter Steam IGN"
              inputProps={{ 'aria-label': 'Enter Steam IGN' }}
              onChange={(event) => this.setState({ input: event.target.value })}
              onKeyPress={this.enterPressed.bind(this)}
            />
            <IconButton className={classes.iconButton} aria-label="Search" onClick={this.execute}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>


        {this.renderUserInfo()}
        {this.renderRecentGames()}

      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(App);