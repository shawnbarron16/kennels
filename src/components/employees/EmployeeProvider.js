import React, { useState, createContext } from "react"

export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
    const [employees, SetEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees")
        .then(res => res.json())
        .then(SetEmployees)
    }

    const addEmployee = EmployeeObj => {
        return fetch ("http://localhost:8088/employee", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(EmployeeObj)
        })
        .then(getEmployees)
    }
    return (
        <EmployeeContext.Provider value ={{
            employees, getEmployees, addEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}