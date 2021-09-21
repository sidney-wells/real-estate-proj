import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
} from '@material-ui/core';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';

const Header = () => {
  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box pr={3}>
          <HomeSharpIcon />
        </Box>
        <Typography>Sonia's Real Estate</Typography>
        <div className={classes.grow} />
        <Box pl={2}>
          <Button color="inherit"> Home</Button>
        </Box>
        <Box pl={2}>
          <Button color="inherit">Services</Button>
        </Box>
        <Box pl={2}>
          <Button color="inherit">Specialities</Button>
        </Box>
        <Box pl={2}>
          <Button color="inherit">Technology</Button>
        </Box>
        <Box pl={2}>
          <Button color="inherit">About</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
