import "./App.css";
import React, { useState } from "react";
import Button from "./components/Button";
import ParkingLot from "./components/ParkingLot";

function App() {
  const [parkingStatus, setparkingStatus] = useState("free");

  return (
    <div className="App">
      <Button>Insert Vehicle</Button>
      <ParkingLot className={"ParkingLot"} />
    </div>
  );
}

export default App;
