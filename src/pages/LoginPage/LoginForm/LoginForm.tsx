import React, { useState } from 'react';
import * as PropTypes from 'prop-types';

export default function LoginForm({ onLogin }: { onLogin: any }) {
    const [authData, setAuthData] = useState({ userName: '', password: '' });

    const onSubmit = (event: any) => {
        event.preventDefault();
        onLogin(authData);
        setAuthData({ userName: '', password: '' });
    };
    const onChange = (event: any) => {
        const { name, value } = event.target;
        setAuthData({ ...authData, [name]: value });
    };

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <div className="form-group">
                <label>User name</label>
                <input
                    type="text"
                    value={authData.userName}
                    name="userName"
                    className="form-control"
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    value={authData.password}
                    name="password"
                    className="form-control"
                    onChange={onChange}
                />
            </div>
            <button type="button" className="btn btn-primary btn-lg btn-block submit-button" onClick={onSubmit}>
                Submit
            </button>
        </form>
    );
}

LoginForm.propTypes = {
    onLogin: PropTypes.func.isRequired,
};
