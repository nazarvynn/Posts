import React from 'react';
import * as PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FormGroup, Button, InputGroup, Intent } from '@blueprintjs/core';

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
                // const isInvalidUserName = errors.name && touched.name;
                // const isInvalidPassword = errors.password && touched.password;
                return (
                    <Form>
                        <FormGroup label="User name">
                            <InputGroup name="name" />
                            {/*{ className={`form-control ${isInvalidUserName && 'is-invalid'}`}}*/}
                            {/*{isInvalidUserName && <div className="invalid-feedback">{errors.name}</div>}*/}
                        </FormGroup>
                        <FormGroup label="Password">
                            <InputGroup name="password" type="password" />
                            {/*{className={`form-control ${isInvalidPassword && 'is-invalid'}`}}*/}
                            {/*{isInvalidPassword && <div className="invalid-feedback">{errors.password}</div>}*/}
                        </FormGroup>
                        <Button type="submit">
                            {/*{ className="btn btn-primary btn-lg btn-block submit-button"}*/}
                            Submit
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    );
}

LoginForm.propTypes = {
    onLogin: PropTypes.func.isRequired,
};
