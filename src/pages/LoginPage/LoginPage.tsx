import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useAuth } from '../../auth/hooks';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import LoginForm from './LoginForm/LoginForm';
import { AuthData } from '../../core/models';
import './loginPage.scss';

export default function LoginPage() {
    const auth = useAuth();
    const location = useLocation();
    const history = useHistory();
    const { from } = (location.state as any) || { from: { pathname: '/posts/1' } };

    const onLogin = (authData: AuthData) => {
        auth.login(authData)
            .then(() => {
                history.replace(from);
            })
            .catch(() => {});
    };

    return (
        <AuthLayout>
            <div className="login-container border rounded">
                <h4 className="text-center">Login</h4>
                <hr />
                <LoginForm onLogin={onLogin} />
            </div>
        </AuthLayout>
    );
}
