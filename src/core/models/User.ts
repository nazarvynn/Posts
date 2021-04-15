import { UserRole } from '../enum';

export interface User {
    email: string;
    name: string;
    role?: UserRole;
    password?: string;
}
