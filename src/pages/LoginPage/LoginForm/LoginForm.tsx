import React from 'react';
import * as PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
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
                const isInvalidUserName = errors.name && touched.name;
                const isInvalidPassword = errors.password && touched.password;
                const userNameIntent = isInvalidUserName ? Intent.DANGER : Intent.NONE;
                const passwordIntent = isInvalidPassword ? Intent.DANGER : Intent.NONE;
                return (
                    <Form>
                        <FormGroup
                            label="User name"
                            helperText={isInvalidUserName && errors.name}
                            intent={userNameIntent}
                        >
                            <InputGroup name="name" intent={userNameIntent} large={true} />
                        </FormGroup>
                        <FormGroup
                            label="Password"
                            helperText={isInvalidPassword && errors.password}
                            intent={passwordIntent}
                        >
                            <InputGroup name="password" type="password" intent={passwordIntent} large={true} />
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
