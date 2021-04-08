import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { USERS, USER_MENU } from '../../../core/const';
import { MenuType } from '../../../core/enum';
import { MenuItem } from '../../../core/models';
import './userMenu.scss';

export default function UserMenu() {
    const [{ userName }] = USERS;
    const [isShow, setShow] = useState(false);

    const toggleSow = () => {
        setShow(!isShow);
    };

    // useEffect ||=> get dom elements

    return (
        <li className={`nav-item dropdown ${isShow ? 'show' : ''}`} onClick={toggleSow}>
            <span className="nav-link dropdown-toggle">{userName}</span>
            <ul className={`dropdown-menu ${isShow ? 'show' : ''}`}>
                {USER_MENU.map((item, index) => (
                    <li key={index}>{getMenuItem(item)}</li>
                ))}
            </ul>
        </li>
    );
}

const getMenuItem = ({ type, label, path }: MenuItem) => {
    switch (type) {
        case MenuType.LABEL:
            return <span className="dropdown-item">{label}</span>;
        case MenuType.DIVIDER:
            return <hr className="dropdown-divider" />;
        case MenuType.LINK:
            return (
                <Link className="dropdown-item" to={path as string}>
                    {label}
                </Link>
            );
    }
};
