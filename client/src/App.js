import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import './App.css';

const useStyles = {
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
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };

    this.execute = this.execute.bind(this);
  }

  async execute() {
    const userdata = await axios.get(`http://localhost:9000/steam//user-summary/${this.state.input}`);
    console.log(userdata);

    // do something about the returned data;
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
        <header className="App-header">
          {/* Search Bar */}
          <Paper className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Enter Steam IGN"
              inputProps={{ 'aria-label': 'Enter Steam IGN' }}
              onChange={(event) => this.setState({ input: event.target.value })}
              onKeyPress={this.enterPressed.bind(this)}
            />
            <IconButton className={classes.iconBuWtton} aria-label="Search" onClick={this.execute}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(App);