import { AuthData, User } from '../core/models';
import { USERS } from '../core/const';
import { getItemByKey, setItemByKey, removeItemByKey } from './WebStorageService';

const AUTH_USER_KEY = 'auth-user';

export function getAuthUser(): User {
    return (getItemByKey(AUTH_USER_KEY, { isSessionStorage: true }) as User) || null;
}

export function authLogin(authData: AuthData): Promise<User> {
    const user = USERS.find(({ userName }) => userName === authData.userName);
    return new Promise((resolve, reject) => {
        if (authData?.password === user?.password) {
            const { password, ...copyUser } = user;
            setItemByKey(AUTH_USER_KEY, copyUser, { isSessionStorage: true });
            resolve(user);
        } else {
            reject();
        }
    });
}
export function authLogout(): Promise<void> {
    removeItemByKey(AUTH_USER_KEY, { isSessionStorage: true });
    return Promise.resolve();
}
