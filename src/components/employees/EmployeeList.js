import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employees.css";

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees");
    getEmployees();
  }, []);

  return (
    <>
    <h2>Employees</h2>
    <section className="employees">
      {employees.map((employee) => {
        return (
          <div
            className="employee"
            key={employee.name}
            id={`customer--${employee.id}`}>
            <div className="animal__name">Name: {employee.name}</div>
            <div className="customer__address">Location: {employee.locationId}</div>
          </div>
        );
      })}
    </section>
    </>
  );
};