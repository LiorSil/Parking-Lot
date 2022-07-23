import React from "react";
import Section from "./Section";
import "./ParkingLot.css";
const ParkingLot = () => {
  return (
    <table>
      <tbody>
        <tr className="parkinglot-table">
          <Section
            Area={"A"}
            amount={10}
            className="left-section"
            location="top-left"
          />
          <Section
            Area={"B"}
            amount={10}
            className="right-section"
            location="top-right"
          />

          <Section
            Area={"C"}
            amount={10}
            className="left-section"
            location="bottom-left"
          />

          <Section
            Area={"D"}
            amount={10}
            className="right-section"
            location="bottom-right"
          />
        </tr>
      </tbody>
    </table>
  );
};

export default ParkingLot;
