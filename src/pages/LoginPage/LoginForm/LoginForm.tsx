import React from 'react';
import * as PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginFormSchema = Yup.object().shape({
    // Example:
    // firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    // email: Yup.string().email('Invalid email').required('Required'),
    name: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
});

export default function LoginForm({ onLogin }: { onLogin: any }) {
    return (
        <Formik initialValues={{ name: '', password: '' }} validationSchema={LoginFormSchema} onSubmit={onLogin}>
            {({ errors, touched }) => {
                const isInvalidUserName = errors.name && touched.name;
                const isInvalidPassword = errors.password && touched.password;
                return (
                    <Form>
                        <div className="form-group">
                            <label>User name</label>
                            <Field name="name" className={`form-control ${isInvalidUserName && 'is-invalid'}`} />
                            {isInvalidUserName && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <Field
                                name="password"
                                type="password"
                                className={`form-control ${isInvalidPassword && 'is-invalid'}`}
                            />
                            {isInvalidPassword && <div className="invalid-feedback">{errors.password}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block submit-button">
                            Submit
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
}

LoginForm.propTypes = {
    onLogin: PropTypes.func.isRequired,
};
