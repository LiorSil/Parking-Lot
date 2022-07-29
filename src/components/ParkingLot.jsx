import React, { Fragment, useState, useEffect, useCallback } from "react";
import Section from "./Section";
import "./ParkingLot.css";
import CarRegister from "./CarRegister";
import Button from "./Button";
import SectionsList from "./SectionsList";

const ParkingLot = () => {
  const [secA, setSecA] = useState([]);
  const [secB, setSecB] = useState([]);
  const [secC, setSecC] = useState([]);
  const [secD, setSecD] = useState([]);

  const [CarRegisterIsShown, setCarRegisterIsShown] = useState(false);
  const showCarRegister = () => {
    setCarRegisterIsShown(true);
  };

  const hideCarRegister = () => {
    setCarRegisterIsShown(false);
  };

  const occupyPark = (set, id) => {
    switch (set) {
      case "A":
        setSecA([...secA, id]);
        break;

      case "B":
        setSecB([...secB, id]);
        break;
      case "C":
        setSecC([...secC, id]);
        break;

      case "D":
        setSecD([...secD, id]);
        break;
      default:
        console.log("worng sec");
    }
  };
  let content = <SectionsList sections={{ secA, secB, secC, secD }} />;

  return (
    <Fragment>
      {console.log("render")}
      <Button onClick={showCarRegister}>Insert Vehicle</Button>
      {CarRegisterIsShown && (
        <CarRegister onClose={hideCarRegister} occupyPark={occupyPark} />
      )}
      <table>
        <tbody>
          <tr className="parkinglot-table">{content}</tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default ParkingLot;
