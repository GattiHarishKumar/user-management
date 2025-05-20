import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">User Management System</Link>
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-light text-primary fw-bold" to="/adduser">+ Add User</Link>
                </div>
            </div>
        </nav>
    );
}
