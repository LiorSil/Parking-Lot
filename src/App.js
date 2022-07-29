import "./App.css";
import React, { Fragment, useState } from "react";
import Button from "./components/Button";
import ParkingLot from "./components/ParkingLot";
import CarRegister from "./components/CarRegister";

function App() {
  return (
    <Fragment>
      <div className="App">
        <ParkingLot />
      </div>
    </Fragment>
  );
}

export default App;
