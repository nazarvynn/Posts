import React from 'react';
import { NavLink } from 'react-router-dom';

import UserMenu from '../UserMenu/UserMenu';
import { useAuth } from '../../../auth/hooks';
import { ADMIN_PAGES, NAVIGATION } from '../../../core/const';
import { UserRole } from '../../../core/enum';
import { NavigationItem, User } from '../../../core/models';

export default function MainNavigation() {
    const { user: authUser } = useAuth();
    const { role } = (authUser as User) || {};

    return (
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
                {getNavigationList(role).map(({ label, path }: NavigationItem, index) => (
                    <li className="nav-item" key={index}>
                        <NavLink className="nav-link" to={path} exact activeClassName="active">
                            {label}
                        </NavLink>
                    </li>
                ))}
                <UserMenu />
            </ul>
        </div>
    );
}

function getNavigationList(userRole: UserRole): NavigationItem[] {
    return userRole === UserRole.Observer
        ? NAVIGATION.filter(({ path }) => ADMIN_PAGES.indexOf(path) === -1)
        : NAVIGATION;
}
