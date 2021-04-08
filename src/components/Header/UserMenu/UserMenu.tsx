import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../../auth/hooks';
import { USER_MENU } from '../../../core/const';
import { MenuType } from '../../../core/enum';
import { MenuItem } from '../../../core/models';
import './userMenu.scss';

export default function UserMenu() {
    const USER_MENU_CLS = 'user-menu';
    const history = useHistory();
    const auth = useAuth();
    const logout = () => {
        auth.logout().then(() => {
            history.push('/auth');
        });
    };
    const [isShow, setShow] = useState(false);
    const toggleSow = () => {
        setShow(!isShow);
    };
    const onBlur = (event: any) => {
        const { target } = event;
        if (isShow && !target.closest(`.${USER_MENU_CLS}`)) {
            setShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', onBlur);
        return () => {
            document.removeEventListener('click', onBlur);
        };
    });

    return (
        <li className={`nav-item dropdown ${isShow ? 'show' : ''}`} onClick={toggleSow}>
            <span className="nav-link dropdown-toggle">{auth.user.userName}</span>
            <ul className={`dropdown-menu ${USER_MENU_CLS} ${isShow ? 'show' : ''}`}>
                {USER_MENU.map((item, index) => (
                    <li key={index}>{getMenuItem(item, logout)}</li>
                ))}
            </ul>
        </li>
    );
}

const getMenuItem = ({ type, label, path }: MenuItem, logout: any) => {
    switch (type) {
        case MenuType.LABEL:
            return <span className="dropdown-item">{label}</span>;
        case MenuType.DIVIDER:
            return <hr className="dropdown-divider" />;
        case MenuType.LOGOUT:
            return (
                <span className="dropdown-item" onClick={logout}>
                    {label}
                </span>
            );
        case MenuType.LINK:
            return (
                <Link className="dropdown-item" to={path as string}>
                    {label}
                </Link>
            );
    }
};
