import React from 'react';
import { NavLink } from 'react-router-dom';

import { Navigation } from '../../../core/models';
import { NAVIGATION } from '../../../core/const';

export default function MainNavigation() {
    return (
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
                {NAVIGATION.map(({ label, path }: Navigation, index) => (
                    <li className="nav-item" key={index}>
                        <NavLink className="nav-link" to={path} exact activeClassName="active">
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
