import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import "./Locations.css";

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext);
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations");
    getLocations();
  }, []);

  return (
    <>
    <h2>Locations</h2>
    <section className="locations">
      {locations.map((location) => {
        return (
          <div
            className="location"
            key={location.name}
            id={`location--${location.id}`}>
            <div className="location__name">Location: {location.name}</div>
            <div className="location__address">Adress: {location.address}</div>
          </div>
        );
      })}
    </section>
    </>
  );
};