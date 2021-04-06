import React from 'react';

export default function Navigation() {
    return (
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">
                        Home
                        <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Services
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
}
