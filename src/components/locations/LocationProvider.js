import React, { useState, createContext } from "react"

export const LocationContext = createContext()

export const LocationProvider = (props) => {
    const [locations, SetLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
        .then(res => res.json())
        .then(SetLocations)
    }

    const addLocation = LocationObj => {
        return fetch ("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(LocationObj)
        })
        .then(getLocations)
    }
    return (
        <LocationContext.Provider value ={{
            locations, getLocations, addLocation
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}