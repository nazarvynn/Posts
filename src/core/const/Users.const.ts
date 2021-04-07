import { UserRole } from '../enum';
import { User } from '../models';

export const USERS: User[] = [
    {
        email: 'admin@test.com',
        userName: 'Admin',
        userRole: UserRole.Admin,
        password: 'password1',
    },
    {
        email: 'observer@test.com',
        userName: 'Observer',
        userRole: UserRole.Observer,
        password: 'password1',
    },
];
