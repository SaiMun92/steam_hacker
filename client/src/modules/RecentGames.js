import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

function convertMins(mins) {
    if (mins < 60) return mins + " mins"

    else {
        let rhours = Math.floor(mins/60);
        let rmins = Math.round(mins/60);

        return rhours + " Hr" + rmins + " Mins";
    }

}

export default function PaperSheet(props) {
  const classes = useStyles();

  console.log(props);
  // Convert mins to (hr, mins)
  let playTime2 = convertMins(props.data.playTime2);
  let playTime = convertMins(props.data.playTime);
  
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
            Game: {props.data.name}
        </Typography>
        <Typography component="p">  
            Time played(last 2 weeks): {playTime2}
        </Typography>
        <Typography component="p">  
            Total Time played: {playTime}
        </Typography>
      </Paper>
    </div>
  );
}