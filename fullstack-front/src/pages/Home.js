import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table table-hover border shadow">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={user.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-1' to={`/viewuser/${user.id}`}>View</Link>
                                        <Link className='btn btn-outline-primary mx-1' to={`/edituser/${user.id}`}>Edit</Link>
                                        <button className='btn btn-danger mx-1' onClick={() => deleteUser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
