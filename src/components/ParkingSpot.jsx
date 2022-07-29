import React, { Fragment } from "react";
import greenVlogo from "../pictures/green-v-with-circle.png";
import redCrossLogo from "../pictures/red-cross-mark-clipart-circle.png";
// import "./ParkingSpot.css";
import logo from "../pictures/red-cross-mark-clipart-circle.png";
import classes from "./ParkingSpot.module.css";

const ParkingSpot = ({ area, status, side, id }) => {
  return (
    <Fragment>
      <div className={classes["container"]}>
        <img
          className={classes[`side-${side}`]}
          src={require("../pictures/parking-single-spot.jpeg")}
        />
        <img
          className={classes[`green-v-${side}`]}
          src={status === "free" ? greenVlogo : redCrossLogo}
        />
      </div>

      <p className={classes[`spot-text-${side}`]}>
        {area}
        {id} {status}
      </p>
    </Fragment>
  );
};
export default ParkingSpot;
