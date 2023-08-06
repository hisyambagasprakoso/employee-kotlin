import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Employees = () => {
    const [employees, setEmployee] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getEmployees();
      }, []);

    const getEmployees = async () => {
        const response = await axios.get("http://localhost:8080/api/employees");
        setEmployee(response.data);
    };

    const deleteEmployee = async (id) => {
        try {
          await axios.delete(`http://localhost:8080/api/employee/${id}`);
          getEmployees();
        } catch (error) {
          console.log(error);
        }
    };

    const logoutEmployee = async () => {
        try {
          await axios.post(`http://localhost:8080/api/logout`);
          navigate("/login");
        } catch (error) {
          console.log(error);
        }
    };

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <Link to={`add`} className="button is-success">
            Add New
            </Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>NIK</th>
                        <th>Address</th>
                        <th>Telp</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {employees.map((employee, index) => (
                    <tr key={employee.id}>
                        <td>{index + 1}</td>
                        <td>{employee.name}</td>
                        <td>{employee.nik}</td>
                        <td>{employee.address}</td>
                        <td>{employee.telp}</td>
                        <td>{employee.email}</td>
                        <td>{employee.password}</td>
                        <td>
                        <Link
                            to={`edit/${employee.id}`}
                            className="button is-small is-info mr-2"
                        >
                            Edit
                        </Link>
                        <button
                            onClick={() => deleteEmployee(employee.id)}
                            className="button is-small is-danger"
                        >
                            Delete
                        </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button
            onClick={() => logoutEmployee()}
            className="button is-medium is-danger">Logout</button>
        </div>
    </div>
  )
}

export default Employees