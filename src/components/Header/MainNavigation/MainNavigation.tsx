import React from 'react';
import { NavLink } from 'react-router-dom';

import UserMenu from '../UserMenu/UserMenu';
import { Navigation } from '../../../core/models';
import { NAVIGATION } from '../../../core/const';

export default function MainNavigation() {
    const isAdminRole = true;
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
                {isAdminRole && <UserMenu />}
            </ul>
        </div>
    );
}
