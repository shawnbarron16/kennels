import React from "react"
import "./Kennel.css"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"

export const Kennel = () => (
    <>
            <NavBar />
        <ApplicationViews />
        
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit us at the Nashville North location.</div>
            <div>500 Puppy Way</div>
        </address>

        <article>
            <AnimalProvider>
                <AnimalList />
            </AnimalProvider>

            <LocationProvider>
                <LocationList />
            </LocationProvider>

            <CustomerProvider>
                <CustomerList />
            </CustomerProvider>

            <EmployeeProvider>
                <EmployeeList />
            </EmployeeProvider>
        </article>
    </>
)