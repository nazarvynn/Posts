import { useState } from 'react';

import { AuthData, User } from '../../core/models';
import { getAuthUser, authLogin, authLogout } from '../Auth';

export default function useProvideAuth() {
    const [user, setUser] = useState(getAuthUser() as User);
    const login = (authData: AuthData) =>
        authLogin(authData).then((user) => {
            setUser(user);
        });
    const logout = () =>
        authLogout().then(() => {
            setUser(null as any);
        });
    return { user, login, logout };
}
