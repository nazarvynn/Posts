import { AuthData, User } from '../core/models';
import { USERS } from '../core/const';

export function authLogin(authData: AuthData): Promise<User> {
    const user = USERS.find(({ userName }) => userName === authData.userName);
    return new Promise((resolve, reject) => {
        if (authData?.password === user?.password) {
            resolve(user);
        } else {
            reject();
        }
    });
}
export function authLogout(): Promise<void> {
    return Promise.resolve();
}
