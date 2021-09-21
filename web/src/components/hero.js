import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Grid, Container, Button } from '@material-ui/core';
import Image from '../../public/apartment1.jpg';

const Hero = () => {
  const useStyles = makeStyles((theme) => ({
    heroContent: {
      background: `url(${Image})`,
      backgroundSize: '100% 100%',
      opacity: '1',
      padding: theme.spacing(20, 0, 18),

    },
    
    heroButtons: {
      marginTop: theme.spacing(4),
      opacity: '1',
    },
  }));

  const WhiteTextTypography = withStyles({
    root: {
      color: '#FFFFFF',
      fontWeight: '900',
    },
  })(Typography);

  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <WhiteTextTypography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
        >
          Album layout
        </WhiteTextTypography>
        <WhiteTextTypography variant="h5" align="center" paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
        </WhiteTextTypography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Main call to action
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Secondary action
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
