import { useState } from 'react';

import { AuthData, User } from '../../core/models';
import { authLogin, authLogout } from '../../services';

export default function useProvideAuth() {
    const [user, setUser] = useState(null);
    const login = (authData: AuthData) => {
        return authLogin(authData).then((user: User) => {
            setUser(user as any);
        });
    };
    const logout = () => {
        return authLogout().then(() => {
            setUser(null);
        });
    };
    return { user, login, logout };
}
