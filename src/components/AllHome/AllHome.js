import { Container } from "@material-ui/core";
import React from "react";
import UpcomingMovies from "../UpcomingMovie/UpcomingMovies.js";
import useStyles from "./styles.js";
const AllHome = () => {
  const classes = useStyles();
  return (
    <div className={classes.allHome}>
      <Container>
        <UpcomingMovies />
      </Container>
    </div>
  );
};

export default AllHome;
