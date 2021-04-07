import { UserRole } from '../enum';

export interface User {
    email: string;
    userName: string;
    userRole: UserRole;
    password?: string;
}
