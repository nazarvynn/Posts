import { Redirect } from 'react-router-dom';

import { useAuth } from './hooks';

export default function AuthComponent() {
    const auth = useAuth();
    return auth?.user ? null : <Redirect to="auth" />;
}
