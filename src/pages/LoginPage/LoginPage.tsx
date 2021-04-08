import React from 'react';
import { useHistory } from 'react-router-dom';

import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import LoginForm from './LoginForm/LoginForm';
import { USERS } from '../../core/const';
import './loginPage.scss';

export default function LoginPage() {
    const history = useHistory();

    const onLogin = ({ userName, password }: { userName: string; password: string }) => {
        const user = USERS.find(({ userName: user }) => user === userName);
        if (password === user?.password) {
            history.push('/posts');
        }
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
