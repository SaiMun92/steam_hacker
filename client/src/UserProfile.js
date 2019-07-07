import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
            {props.user}
        </Typography>
        <Typography component="p">  
            Nickname: {props.data.nickname}
        </Typography>
        <Typography component="p">  
            url: {props.data.url}
        </Typography>
        <Typography component="p">  
            Last log off: {props.data.lastLogOff}
        </Typography>
      </Paper>
    </div>
  );
}