import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
    // <Link className="navbar-brand" to="/">
    //     Blog
    // </Link>

    return (
        <a className="navbar-brand" href="/">
            Blog
        </a>
    );
}
