import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div class="">

         <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid margin">
                    <a className="navbar-brand " href="#">
                        <img src="https://i.ibb.co/m46gKpw/Logo.png" width="122px" height="56px" alt=""/>
                    </a>
                    <div class="d-flex search-field mx-4">
                        <FontAwesomeIcon className="icon" icon={faSearch} />
                        <input className="input-field p-1" placeholder="Search your Destination . . ." type="text"/>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                   
                    <div className="collapse navbar-collapse" id="navbarNav" >
                    <ul className="navbar-nav m-auto">
                    <li className="nav-item mx-3">
                            <Link to="/" className="nav-link">News</Link>
                        </li>
                        <li className="nav-item mx-3">
                             <Link to="/" className="nav-link">Destination</Link>
                        </li>
                        <li className="nav-item mx-3">
                           <Link to="/" className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to="/" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item mx-3">
                             <Link to="/login" className="nav-link"><button type="button" className="btn btn-warning">Login</button></Link>
                        </li>
                    </ul>
                    </div>
                </div>
         </nav> 
        </div>
        
    );
};

export default Header;