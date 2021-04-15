import { UserRole } from '../enum';
import { User } from '../models';

export const USERS: User[] = [
    {
        email: 'admin@test.com',
        name: 'admin',
        role: UserRole.Admin,
        password: 'password1',
    },
    {
        email: 'observer@test.com',
        name: 'observer',
        role: UserRole.Observer,
        password: 'password1',
    },
];
