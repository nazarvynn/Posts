import { Redirect } from 'react-router-dom';

import { useAuth } from './hooks';

export default function AuthComponent() {
    const auth = useAuth();
    return auth?.user ? <Redirect to="/posts" /> : <Redirect to="/auth" />;
}
