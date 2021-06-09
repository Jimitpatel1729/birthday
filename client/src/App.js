import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import memories from './images/cake2.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const theme = createMuiTheme({
    typography: {
      // fontFamily: [
      //   'Chilanka',
      //   'bold',
      // ].join(','),
      color:'black',
    },});

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" >
      <ThemeProvider theme={theme}><Typography className={classes.heading} variant="h2" align="center">MONI DA B'DAY</Typography>
       </ThemeProvider>
       <img className={classes.image} src={memories} alt="icon" height="60" />
      
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      
    </Container>
  );
};

export default App;
