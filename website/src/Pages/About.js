import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

function About(props) {
    const { classes } = props;
  
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>

            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}
            >
              Blog
            </Typography>
      </div>
      </React.Fragment>
    );
  }

export default About;