import { MenuItem } from '../models';
import { MenuType } from '../enum';
import { USERS } from './Users.const';

export const USER_MENU: MenuItem[] = [
    {
        type: MenuType.LABEL,
        label: USERS[0].email,
    },
    {
        type: MenuType.DIVIDER,
    },
    {
        type: MenuType.LINK,
        label: 'logout',
        path: '/auth',
    },
];
