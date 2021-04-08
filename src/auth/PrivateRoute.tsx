import { Redirect, Route } from 'react-router-dom';

import { useAuth } from './hooks';

export default function PrivateRoute({ children, ...rest }: any) {
    const auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth?.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/auth',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}
