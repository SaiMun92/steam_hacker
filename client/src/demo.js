/*
Probably best if i use the traditional kind of way
*/

import React, { Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import SearchIcon from "@material-ui/icons/Search";
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import FourKIcon from '@material-ui/icons/FourK';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 32,
  },
}));


class SvgMaterialIcons extends Component {

  classes = useStyles();
  render() {
    return (
        <Grid container className={this.classes.root}>
          <Grid item xs={4}>
            <Typography>Filled</Typography>
          </Grid>
          <Grid item xs={8}>
            <DeleteIcon className={this.classes.icon} />
            <DeleteForeverIcon className={this.classes.icon} />
            <SearchIcon className={this.classes.icon} />
          </Grid>
        </Grid>
      );
  }
}

export default SvgMaterialIcons;