import React, { useState, Fragment } from "react";
import Button from "./Button";
import classes from "./FormRegisterCar.module.css";

const FormRegisterCar = ({ occupyPark, onClose }) => {
  const [occupiedPark, setOccupiedPark] = useState({ sec: "", id: 0 });

  const radioButtonChosenHandeler = (e) => {
    setOccupiedPark(() => ({
      ...occupiedPark,
      sec: e.target.value,
    }));
  };
  const numberOfParkingChosenHander = (e) => {
    let id = parseInt(e.target.value);
    setOccupiedPark(() => ({
      ...occupiedPark,
      id: id,
    }));
  };

  const occupyParkHandler = () => {
    occupyPark(
      occupiedPark.sec === "" ? "A" : occupiedPark.sec,
      occupiedPark.id
    );
    onClose();
  };

  return (
    <Fragment>
      <form>
        <h6>Which Section Car Parking ?</h6>
        <input
          name="SectionName"
          type="radio"
          id="A"
          onChange={radioButtonChosenHandeler}
          checked
        />
        <label>
          <span />
          Section A <br />
        </label>
        <input
          name="SectionName"
          type="radio"
          id="B"
          value="B"
          onChange={radioButtonChosenHandeler}
        />

        <label>
          <span />
          Section B<br />
        </label>
        <input
          name="SectionName"
          type="radio"
          id="C"
          value="C"
          onChange={radioButtonChosenHandeler}
        />
        <label>
          <span />
          Section C <br />
        </label>
        <input
          name="SectionName"
          type="radio"
          id="D"
          value="D"
          onChange={radioButtonChosenHandeler}
        />
        <label>
          <span />
          Section D <br />
        </label>
        <label>
          number (between 0 and 10):
          <span />
        </label>
        <input
          type="number"
          defaultValue="0"
          step={1}
          min="0"
          max="9"
          onChange={numberOfParkingChosenHander}
        />
        <br />
        <Button onClick={occupyParkHandler}>Confirm</Button>
        <span />
        <Button onClick={onClose}>Cancel</Button>
      </form>
    </Fragment>
  );
};

export default FormRegisterCar;
