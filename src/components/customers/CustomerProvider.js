import React, { useState, createContext } from "react"

export const CustomerContext = createContext()

export const CustomerProvider = (props) => {
    const [customers, SetCustomers] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
        .then(res => res.json())
        .then(SetCustomers)
    }

    const addCustomer = customerObj => {
        return fetch ("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(customerObj)
        })
        .then(getCustomers)
    }
    return (
        <CustomerContext.Provider value ={{
            customers, getCustomers, addCustomer
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}