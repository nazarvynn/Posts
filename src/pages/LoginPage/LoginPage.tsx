import React from 'react';

import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import LoginForm from './LoginForm/LoginForm';
import './loginPage.scss';

export default function LoginPage() {
    const onLogin = ({ userName, password }: { userName: string; password: string }) => {
        console.log(userName, password);
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
