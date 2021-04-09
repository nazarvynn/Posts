import { useContext } from 'react';

import AuthContext from '../AuthContext';

export default function useAuth(): any {
    return useContext(AuthContext);
}
