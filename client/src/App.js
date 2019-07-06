import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import './App.css';

const useStyles = makeStyles({
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


function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        {/* Search Bar */}
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Enter Steam IGN"
            inputProps={{ 'aria-label': 'Enter Steam IGN' }}
          />
          <IconButton className={classes.iconBuWtton} aria-label="Search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </header>
    </div>
  );
}

export default App;
