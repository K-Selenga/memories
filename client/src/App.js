import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./images/memories.jpg";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
const App = () => {
  return (
    <Container maxidth="lg">
      <AppBar position="static" color="inherit">
        <Typography varaint="h2" align="center">
          Memories
        </Typography>
        <img src={memories} alt="memories" height="160" width="160" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="strecth"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
