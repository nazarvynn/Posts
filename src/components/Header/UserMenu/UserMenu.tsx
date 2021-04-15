import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../../auth/hooks';
import { User } from '../../../core/models';
import './userMenu.scss';

export default function UserMenu() {
    const USER_MENU_CLS = 'user-menu';
    const history = useHistory();
    const { user: authUser, logout: authLogout } = useAuth();
    const { name, email } = (authUser as User) || {};
    const logoutUser = () => {
        authLogout().then(() => {
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
            <span className="nav-link dropdown-toggle">{name}</span>
            <ul className={`dropdown-menu ${USER_MENU_CLS} ${isShow ? 'show' : ''}`}>
                <li>
                    <span className="dropdown-item">{email}</span>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <span className="dropdown-item" onClick={logoutUser}>
                        logout
                    </span>
                </li>
            </ul>
        </li>
    );
}
