import React from "react";
import Button from "./Button";
import classes from "./CarRegister.module.css";
import FormRegisterCar from "./FormRegisterCar";

const CarRegister = ({ occupyPark, onClose }) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <FormRegisterCar occupyPark={occupyPark} onClose={onClose} />
      </div>
    </div>
  );
};

export default CarRegister;
