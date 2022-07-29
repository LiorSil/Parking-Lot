import React, { useState, Fragment } from "react";
import Button from "./Button";

const FormRegisterCar = ({ occupyPark, onClose }) => {
  const [occupiedPark, setOccupiedPark] = useState({ sec: "", id: 0 });

  const radioButtonChosenHandeler = (e) => {
    console.log("Set Chosen: " + e.target.value);
    setOccupiedPark((occupiedPark) => ({
      ...occupiedPark,
      sec: e.target.value,
    }));
  };
  const numberOfParkingChosenHander = (e) => {
    console.log("Radio Button Chosen: " + e.target.value);
    let id = parseInt(e.target.value);
    setOccupiedPark((occupiedPark) => ({
      ...occupiedPark,
      id: id,
    }));
  };
  let sec = occupiedPark.sec === "" ? "A" : occupiedPark.sec;
  let id = occupiedPark.id;
  console.log("id: ", id, "sec: ", sec);
  const occupyParkHandler = (event) => {
    // event.preventDefault();
    // debugger;
    occupyPark(sec, id);
    console.log(sec, id);
    onClose();
  };

  return (
    <Fragment>
      <form>
        <h6>Which Section Car Parking ?</h6>
        <input
          type="radio"
          id="A"
          name="SectionName"
          value="A"
          checked
          onChange={radioButtonChosenHandeler}
        />
        <label>
          <span />
          Section A <br />
        </label>
        <input
          type="radio"
          id="B"
          name="SectionName"
          value="B"
          onChange={radioButtonChosenHandeler}
        />

        <label>
          <span />
          Section B<br />
        </label>
        <input
          type="radio"
          id="C"
          name="SectionName"
          value="C"
          onChange={radioButtonChosenHandeler}
        />
        <label>
          <span />
          Section C <br />
        </label>
        <input
          type="radio"
          id="D"
          name="SectionName"
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
