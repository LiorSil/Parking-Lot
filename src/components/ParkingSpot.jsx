import React, { Fragment } from "react";
// import "./ParkingSpot.css";
import classes from "./ParkingSpot.module.css";

const ParkingSpot = ({ area, status, side, id }) => {
  // const { area, status, side, id } = props;
  // const sideClass = `{}`
  return (
    <Fragment>
      <img
        className={classes[`side-${side}`]}
        src={require("../pictures/parking-single-spot.jpeg")}
      />

      <p className={classes[`spot-text-${side}`]}>
        {area}
        {id} {status}
      </p>
    </Fragment>
  );
};
export default ParkingSpot;
