import React from 'react';
import * as PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { Post } from '../../../core/models';

const LoginFormSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    body: Yup.string().required('Required'),
    userName: Yup.string().required('Required'),
    userEmail: Yup.string().required('Required'),
});

export default function FormPage({
    formData,
    loading,
    onSubmit,
}: {
    formData?: Post;
    loading?: boolean;
    onSubmit: any;
}) {
    const initialState = formData
        ? { title: formData.title, body: formData.body, userName: formData.user.name, userEmail: formData.user.email }
        : { title: '', body: '', userName: '', userEmail: '' };
    return (
        <Formik initialValues={initialState} validationSchema={LoginFormSchema} onSubmit={onSubmit}>
            {({ errors, touched }) => {
                const isInvalidTitle = errors.title && touched.title;
                const isInvalidBody = errors.body && touched.body;
                const isInvalidUserName = errors.userName && touched.userName;
                const isInvalidUserEmail = errors.userEmail && touched.userEmail;
                return (
                    <Form>
                        <div className="form-group">
                            <label>Title</label>
                            <Field name="title" className={`form-control ${isInvalidTitle && 'is-invalid'}`} />
                            {isInvalidTitle && <div className="invalid-feedback">{errors.title}</div>}
                        </div>
                        <div className="form-group">
                            <label>User Name</label>
                            <Field name="userName" className={`form-control ${isInvalidUserName && 'is-invalid'}`} />
                            {isInvalidUserName && <div className="invalid-feedback">{errors.userName}</div>}
                        </div>
                        <div className="form-group">
                            <label>User Email</label>
                            <Field name="userEmail" className={`form-control ${isInvalidUserEmail && 'is-invalid'}`} />
                            {isInvalidUserEmail && <div className="invalid-feedback">{errors.userEmail}</div>}
                        </div>
                        <div className="form-group">
                            <label>Content</label>
                            <Field
                                name="body"
                                as="textarea"
                                className={`form-control ${isInvalidBody && 'is-invalid'}`}
                                rows="6"
                            />
                            {isInvalidBody && <div className="invalid-feedback">{errors.body}</div>}
                        </div>
                        <button
                            type="submit"
                            className={`btn btn-primary btn-lg submit-button ${loading ? 'disabled' : ''}`}
                        >
                            Submit
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
}
FormPage.propTypes = {
    formData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        user: PropTypes.shape({
            name: PropTypes.string,
            email: PropTypes.string,
        }),
    }),
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool,
};
