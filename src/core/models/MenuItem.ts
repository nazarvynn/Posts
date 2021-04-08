import { MenuType } from '../enum';

export interface MenuItem {
    type: MenuType;
    label?: string;
    path?: string;
}
