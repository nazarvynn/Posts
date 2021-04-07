import { UserRole } from '../enum';
import { User } from '../models';

export const USERS: User[] = [
    {
        email: 'admin@test.com',
        userName: 'admin',
        userRole: UserRole.Admin,
        password: 'password1',
    },
    {
        email: 'observer@test.com',
        userName: 'observer',
        userRole: UserRole.Observer,
        password: 'password1',
    },
];
