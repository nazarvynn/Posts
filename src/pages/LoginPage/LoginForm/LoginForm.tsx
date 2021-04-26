import React from 'react';
import * as PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FormGroup, Button, Intent } from '@blueprintjs/core';

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
                        {/* TODO: Add custom input component */}
                        <FormGroup
                            label="User name"
                            helperText={isInvalidUserName && errors.name}
                            intent={isInvalidUserName ? Intent.DANGER : Intent.NONE}
                        >
                            <div className="bp3-form-content">
                                <div
                                    className={`bp3-input-group bp3-large ${
                                        isInvalidUserName ? 'bp3-intent-danger' : ''
                                    }`}
                                >
                                    <Field className="bp3-input" name="name" />
                                </div>
                            </div>
                        </FormGroup>
                        {/* TODO: Add custom input component */}
                        <FormGroup
                            label="Password"
                            helperText={isInvalidPassword && errors.password}
                            intent={isInvalidPassword ? Intent.DANGER : Intent.NONE}
                        >
                            <div className="bp3-form-content">
                                <div
                                    className={`bp3-input-group bp3-large ${
                                        isInvalidPassword ? 'bp3-intent-danger' : ''
                                    }`}
                                >
                                    <Field className="bp3-input" name="password" type="password" />
                                </div>
                            </div>
                        </FormGroup>
                        <div className="text-center">
                            <Button className="submit-button" type="submit" intent={Intent.PRIMARY} large={true}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}

LoginForm.propTypes = {
    onLogin: PropTypes.func.isRequired,
};
