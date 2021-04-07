import React from 'react';
import * as PropTypes from 'prop-types';

import './auth.scss';

export default function AuthLayout({ children }: { children: any }) {
    return (
        <div className="auth container">
            <div className="row">
                <main className="col-md-12">{children}</main>
            </div>
        </div>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.any.isRequired,
};
