import React from "react";
import PropTypes from "prop-types";
import { StyledLatestGame } from "../../style/LatestGame.styles";

import { Grid } from "@mui/material";

export default function LatestGame(props) {
  const { data } = props;

  //This component is part of the StartingLineups view where a user can see more details about their team's players.
  //This table displays a player's stats for their latest game.
  return (
    <StyledLatestGame>
      <Grid container>
        <Grid sx={{ border: 1, borderLeft: 0, borderRight: 0, borderTop: 0, borderColor: 'grey.500' }} item xs={12}>
          <h3>Latest - {data.fantasypointsyahoo} fpts - {Math.floor((Date.now() - Date.parse(data.datetime)) / (1000 * 60 * 60 * 24)) + 1} days ago</h3>
        </Grid>
        
        <Grid sx={{ border: 1, borderTop: 1, borderLeft: 0, borderRight: 0, borderColor: 'grey.500' }} item xs={4}>
          <div>
            <h4>Points</h4>
            <p>{data.points}</p>
          </div>
        </Grid>
        <Grid sx={{ border: 1, borderTop: 1, borderColor: 'grey.500' }} item xs={4}>
          <div>
            <h4>Rebounds</h4>
            <p>{data.rebounds}</p>
          </div>
        </Grid>
        <Grid sx={{ border: 1, borderTop: 1, borderLeft: 0, borderRight: 0, borderColor: 'grey.500' }} item xs={4}>
          <div>
            <h4>Assists</h4>
            <p>{data.assists}</p>
          </div>
        </Grid>

        <Grid sx={{ border: 1, borderLeft: 0, borderRight: 0, borderColor: 'grey.500' }} item xs={4}>
          <div>
            <h4>Blocks</h4>
            <p>{data.blockedshots}</p>
          </div>
        </Grid>
        <Grid sx={{ border: 1, borderColor: 'grey.500' }} item xs={4}>
          <div>
            <h4>Steals</h4>
            <p>{data.steals}</p>
          </div>
        </Grid>
        <Grid sx={{ border: 1, borderLeft: 0, borderRight: 0, borderColor: 'grey.500' }} item xs={4}>
          <div>
            <h4>Turnovers</h4>
            <p>{data.turnovers}</p>
          </div>
        </Grid>

        <Grid sx={{ border: 1, borderBottom: 0, borderLeft: 0, borderRight: 0, borderColor: 'grey.500' }} item xs={4}>
          <div>
            <h4>3PTM</h4>
            <p>{data.threepointersmade}</p>
          </div>
        </Grid>
        <Grid sx={{ border: 1, borderBottom: 0, borderColor: 'grey.500' }} item xs={4}>
          <div>
            <h4>FG%</h4>
            <p>{data.fieldgoalspercentage}</p>
          </div>
        </Grid>
        <Grid sx={{ border: 1, borderBottom: 0, borderLeft: 0, borderRight: 0, borderColor: 'grey.500' }} item xs={4}>
          <div>
            <h4>FT%</h4>
            <p>{data.freethrowspercentage}</p>
          </div>
        </Grid>
      </Grid>
    </StyledLatestGame>
  );
}

LatestGame.propTypes = {
  data: PropTypes.object
};