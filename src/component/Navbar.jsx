import React from 'react';
import { Outlet ,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const state = useSelector((state)=> state.handleCart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  bg-pink bg-dark py-3 shadow-sm ">
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-4 text-primary  rounded bg-dark ">PRANAY<sub>COLLECTION</sub></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-primary" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-primary" to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-primary" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-primary" to="/contact">Contact</Link>
                            </li>
                           
                            
                        </ul>
                       <div className="buttons">
                        <Link to="/login" className="btn btn-outline-primary">
                         <i className="fa fa-sign-in me-1"></i>   Login</Link>

                         <Link to="/register" className="btn btn-outline-primary ms-2">
                         <i className="fa fa-user-plus me-1"></i> Register</Link>

                         <Link to="/cart" className="btn btn-outline-primary ms-2">
                         <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})</Link>


                       </div>
                    </div>
                </div>
            </nav>
            <Outlet />

        </div>
    );
}
export default Navbar;