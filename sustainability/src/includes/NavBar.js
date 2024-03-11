import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import AuthContext from "../Authentication/AuthContext";
import React, { useContext } from 'react';

export const Navbar = () => {
    const { isLoggedIn, user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
      };
    
    return (
        <div className="container-fluid bg-white sticky-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
                    <Link to="/" className="navbar-brand" style={{height:75}}>
                        <img className="img-fluid" src="img/auc-logo-2.png" alt="Logo" style={{ paddingTop: 22 }} />
                    </Link>
                    <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <Link to="/" className="nav-item nav-link active" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                            <HashLink smooth to="/#about" className="nav-item nav-link">About</HashLink>
                            <Link to="/tool" className="nav-item nav-link" onClick={() => window.scrollTo(0, 0)}>Tool</Link>
                            <HashLink smooth to="/#blog" className="nav-item nav-link">Article</HashLink>
                            <HashLink smooth to="/#contact" className="nav-item nav-link">Contact</HashLink>
                            {isLoggedIn  && user ? (
                                <div className="nav-item dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{user.name}</Link>
                                    <div className="dropdown-menu bg-light rounded-0 m-0">
                                        <Link to="#" className="dropdown-item" onClick={handleLogout}>Logout</Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="nav-item dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Login</Link>
                                    <div className="dropdown-menu bg-light rounded-0 m-0">
                                        <Link to="/login" className="dropdown-item">Login</Link>
                                        <Link to="/signup" className="dropdown-item">Signup</Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="border-start ps-4 d-none d-lg-block">
                            <button type="button" className="btn btn-sm p-0"><i className="fa fa-search" /></button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}