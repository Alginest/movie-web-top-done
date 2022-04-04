import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./style";
const UpcomingMovies = () => {
  const classes = useStyles();
  return (
    <section className={classes.upcomingMovies}>
      <Box className={classes.wide}>
        <Typography
          style={{ color: "white" }}
          variant="h5"
          className={classes.generalName}
        >
          Upcoming Movies
        </Typography>

        <Link to="" className={classes.link}>
          <Button className={classes.moreBtn} variant="outlined" type="button">
            View More
          </Button>
        </Link>
      </Box>
    </section>
  );
};

export default UpcomingMovies;
