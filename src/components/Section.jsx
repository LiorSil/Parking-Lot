import React, { Fragment, useState } from "react";
import { createSection } from "../utils/createSection";
import classes from "./Section.module.css";
const Section = (props) => {
  const { L_Array, R_Array } = createSection(
    props.amount,
    props.Area,
    props.data
  );

  return (
    <Fragment>
      <td className={classes.left_spots}>
        <ul>{L_Array}</ul>
      </td>
      <td className={classes.right_spots}>
        <ul>{R_Array}</ul>
      </td>
    </Fragment>
  );
};
export default Section;
