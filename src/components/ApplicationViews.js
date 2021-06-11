import React from "react"
import { Route } from "react-router-dom"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerList } from "./customers/CustomerList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <LocationProvider>
            <CustomerProvider>
            <AnimalProvider>
                <Route path="/animals">
                    <AnimalList />
                </Route>

                <Route exact path="/animals/create">
                    <AnimalForm />
                </Route>
            </AnimalProvider>
            </CustomerProvider>
            </LocationProvider>

            <EmployeeProvider>
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>

            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
        </>
    )
}