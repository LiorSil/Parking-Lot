import React, { Fragment } from "react";
import { createSection } from "../utils/createSection";
import ParkingSpot from "./ParkingSpot";
import "./Section.css";
const Section = (props) => {
  const { L_Array, R_Array } = createSection(props.amount, props.Area);

  return (
    <Fragment>
      <td className="left-spots">
        <ul>{L_Array}</ul>
      </td>

      <td className="right-spots">
        <ul>{R_Array}</ul>
      </td>
    </Fragment>
  );
};
export default Section;
