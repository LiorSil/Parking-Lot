import React from "react";
import ParkingSpot from "../components/ParkingSpot";

export let createSection = (amount, Area, data) => {
  let spotsArray = [];
  let lastID = 0;
  while (amount > 0) {
    spotsArray.push(
      <ParkingSpot
        key={lastID}
        id={lastID}
        area={Area}
        status={"free"}
        side="unassigned"
      />
    );
    amount--;
    lastID++;
  }
  let rightSpots = spotsArray
    .filter((spot) => spot.props.id % 2 !== 0)
    .map((Rspot) => (
      <ParkingSpot
        key={Rspot.props.id}
        id={Rspot.props.id}
        area={Area}
        status={data.includes(Rspot.props.id) ? "occupied" : "free"}
        side={"right"}
      />
    ));
  let leftSpots = spotsArray
    .filter((spot) => spot.props.id % 2 === 0)
    .map((Lspot) => (
      <ParkingSpot
        key={Lspot.props.id}
        id={Lspot.props.id}
        area={Area}
        status={data.includes(Lspot.props.id) ? "occupied" : "free"}
        side={"left"}
      />
    ));
  return {
    L_Array: leftSpots,
    R_Array: rightSpots,
  };
};
